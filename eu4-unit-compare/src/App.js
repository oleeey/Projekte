import './App.css';

const sql = require("msnodesqlv8");

const connectionString = "server=.;Database=eu4units;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0";
const query = "SELECT * from Table_1";

sql.query(connectionString, query, (err,rows) => {
  console.log(rows);
})


function App() {
  return (
    <div className="App">
      <h1>EU4 Unit Compare</h1>
    </div>
  );
}

export default App;
