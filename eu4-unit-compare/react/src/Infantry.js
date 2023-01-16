import React from 'react';

class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
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
      //console.log("selected:",this.state.unitGroup)
      let tech = [];
        for (let i in this.props.data["recordset"]) {
          if (this.props.data["recordset"][i]["Unit_group"] == this.state.unitGroup) {
            //console.log(this.props.data["recordset"][i])
            tech.push(this.props.data["recordset"][i]["Mil_Tech"]);       
          }
        }
        tech = [...new Set(tech)]
        this.setState({
          techList: tech
        }, function () {
            let units = [];
            let num = this.state.techList[0];
            for (let i in this.props.data["recordset"]) {
              if (this.props.data["recordset"][i]["Unit_group"] == this.state.unitGroup & this.props.data["recordset"][i]["Mil_Tech"] == num) {
                units.push(this.props.data["recordset"][i]["Name"])
              };
            };
            this.setState({
              unitList: units
            }, function () {
              //console.log(this.state.unitList)
            });
        })
    }
  
    getUnitList(e) {
      // Erstellung der Liste, in welcher die Daten temporaer gespeichert werden
      let units = [];
      // ausgewählte Zahl benutzen
      let num = e.target.value;
      // durch die Liste gehen und wenn die ausgewählte Gruppe und Technologie stimmen, dann speichern
      for (let i in this.props.data["recordset"]) {
        if (this.props.data["recordset"][i]["Unit_group"] == this.state.unitGroup & this.props.data["recordset"][i]["Mil_Tech"] == num) {
          units.push(this.props.data["recordset"][i]["Name"])
        };
      };
      this.setState({
        unitList: units
      }, function () {
        //console.log(this.state.unitList)
      });
      
    }
  
    render() {
      // Optionen anhand der gespeicherten Liste erstellen
      let techOption = this.state.techList.map(item => <option key={item}>{item}</option>);
      let unitOption = this.state.unitList.map(item => <option key={item}>{item}</option>);
    
      return (
        <form id='inputForm'>
          <div className='divSelect'>
            <label>Unit Group</label>
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
          </div>
          <div className='divSelect'>
            <label>Military Technology</label>
            <select id="selectTech" onChange={this.getUnitList}>
              {techOption}
            </select>
          </div>
          <div className='divSelect'>
            <label>Unit Name</label>
            <select id="selectUnit">
              {unitOption}
            </select>
          </div>
        </form>
      )
    }
  }

class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fireOff: 0,
            fireDef: 0,
            shockOff: 0,
            shockDef: 0,
            moraleOff: 0,
            moraleDef: 0,
            total: 0
        };
        this.getStats = this.getStats.bind(this)
    };

    getStats() {
        for (let i in this.props.data["recordset"]) {
            if (this.props.data["recordset"][i]["Unit_group"] == this.props.unitGroup) {

            }
        }
    };

    render() {
        this.getStats()
        return (
            <table>
                
            </table>
        )
    }
}

class Infantry extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
      
    render() {
      return (
        <div className='Infantry'>
            <Input data={this.props.data}/>
            <Stats data={this.props.data}/>
        </div>
      )
    }
  }

export default Infantry;