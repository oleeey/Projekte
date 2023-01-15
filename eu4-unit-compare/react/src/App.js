import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      unitGroup: "",
      techList: [],
      unitList: []
    };
    this.getUnitGroup = this.getUnitGroup.bind(this);
    this.getTechList = this.getTechList.bind(this);
    this.getUnitList = this.getUnitList.bind(this);
  }

  getUnitGroup(e) {
    this.setState({unitGroup: e.target.value, techList: []}, function () {
      this.getTechList();
    });
  }

  getTechList() {
    console.log("selected:",this.state.unitGroup)
    let tech = [];
      for (let i in this.state.data["recordset"]) {
        if (this.state.data["recordset"][i]["Unit_group"] == this.state.unitGroup) {
          console.log(this.state.data["recordset"][i])
          tech.push(this.state.data["recordset"][i]["Mil_Tech"]);       
        }
      }
      tech = [...new Set(tech)]
      this.setState({
        techList: tech
      }, function () {
          let units = [];
          let num = this.state.techList[0];
          for (let i in this.state.data["recordset"]) {
            if (this.state.data["recordset"][i]["Unit_group"] == this.state.unitGroup & this.state.data["recordset"][i]["Mil_Tech"] == num) {
              units.push(this.state.data["recordset"][i]["Name"])
            };
          };
          this.setState({
            unitList: units
          }, function () {
            console.log(this.state.unitList)
          });
      })
  }

  getUnitList(e) {
    // Erstellung der Liste, in welcher die Daten temporaer gespeichert werden
    let units = [];
    // ausgewählte Zahl benutzen
    let num = e.target.value;
    // durch die Liste gehen und wenn die ausgewählte Gruppe und Technologie stimmen, dann speichern
    for (let i in this.state.data["recordset"]) {
      if (this.state.data["recordset"][i]["Unit_group"] == this.state.unitGroup & this.state.data["recordset"][i]["Mil_Tech"] == num) {
        units.push(this.state.data["recordset"][i]["Name"])
      };
    };
    this.setState({
      unitList: units
    }, function () {
      console.log(this.state.unitList)
    });
    
  }

  // Verbindung mit dem Express Server
  componentDidMount() {
    fetch("http://localhost:5000/units")
    .then(res => res.json())
    .then(
      (result) => {
        //console.log(result);
        this.setState({
          data:result,
          isLoaded: true
        });
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
  }

  render() {
    // Optionen anhand der gespeicherten Liste erstellen
    let techOption = this.state.techList.map(item => <option key={item}>{item}</option>);
    let unitOption = this.state.unitList.map(item => <option key={item}>{item}</option>);
  
    return (
    <div className="App">
      <h1>EU4 Unit Compare</h1>
      <select id="selectGroup" onChange={this.getUnitGroup}>
        <option selected disabled>-</option>
        <option>Aboriginal</option>
        <option>African</option>
        <option>Anatolian</option>
        <option>Chinese</option>
        <option>Eastern</option>
        <option>High American</option>
        <option>Indian</option>
        <option>Muslim</option>
        <option>Mesoamerican</option>
        <option>North American</option>
        <option>South American</option>
        <option>Nomad</option>
        <option>Polynesian</option>
        <option>Western</option>
      </select>
      <select id="selectTech" onChange={this.getUnitList}>
        {techOption}
      </select>
      <select id="selectUnit">
        {unitOption}
      </select>

    </div>
    )
  }
}


export default App;
