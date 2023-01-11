import "./App.css";
import { useMemo, useState } from "react";



function App() {
  const [number, setNumber] = useState("");
  const valid = useMemo(() => valid(number), [number]);
  return (
    <div className="App">
      <div className="control has-icons-right">
        <form>
          <input
            className="input is-large"
            type="text"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value)
            }}
            placeholder="Enter number..."
          />
          <p>NUmber: {number}</p>
        </form>
        <span className="icon is-small is-right">
          <i className="fas fa-times" id="MyElement" />
        </span>
        <button onClick={valid}>Check</button>
      </div>
    </div>

  );
  // function validateNumber() {
  //   if (!number.match(/^\d+/))
  //   {
  //     document.getElementById("MyElement").className = "fas fa-check";
  //   }
  // }

}


export default App;
