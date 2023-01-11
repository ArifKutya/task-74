import "./App.css";
import { useState } from "react";
import { validNumber } from "./Regex";

function App() {
  const [number, setNumber] =useState("")
  const [numberErr, setNumberErr] = useState(false)
  const validate = () => {
    if (!validNumber.test(number)) {
      setNumberErr(true)
    }
  };
  return (
    <div className="App">
     <div className="control has-icons-right">
       <form>
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={number}
          onChange={e => setNumber(e.target.value)}

        />
         <button onClick={validate}>Submit</button>
         {numberErr && <p>You must insert number</p>}
       </form>
        <span className="icon is-small is-right">
          <i className="fas fa-times" />
        </span> 
      </div>
    </div>
  );
}

export default App;
