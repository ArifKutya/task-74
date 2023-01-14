import "./App.css";
import { useMemo, useState } from "react";
import { validNumber } from "./Regex";


function App() {
  const [text, setText] = useState("");
  const [textErr, setTextErr] = useState(false);
  const validate = useMemo(() => {
    if (!validNumber.test(text)) {
      setTextErr(true);
    }
  }, [text]);
  function changeClass() {
    if (validate === true) {
      document.getElementById("MyElement").className = "fas fa-check"
    }
  }
  return (
    <div className="App">
      <div className="control has-icons-right">
        <form>
          <input
            className="input is-large"
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Enter number..."
          />
          <div>
            <p>{textErr && <p>Your text is number</p>}</p>
          </div>
          <div>
          </div>
        </form>
        <span className="icon is-small is-right">
          <i className="fas fa-times" id="MyElement" onChange={changeClass} />
        </span>
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
