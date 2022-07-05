import "./styles.css";
import React, { useState } from "react";
import Header from "./Header";

function App() {
  const [bmi, setBmi] = useState({ height: null, weight: null });
  let height = bmi.height;
  let weight = bmi.weight;

  function bmiHandler() {
    let w = document.getElementById("kg").value;
    let h = document.getElementById("cm").value;
    setBmi({ height: h, weight: w });
    //console.log(bmi);
  }
  return (
    <div className="App">
      <div className="center">
        <Header />
        <div className="inputSection">
          <label>Enter your height in cm :</label>
          <br />
          <br />
          <input id="cm"></input>
          <br />
          <br />
          <label>Enter your weight in kg :</label>
          <br />
          <br />
          <input id="kg"></input>
          <br />
          <br />
          <button onClick={bmiHandler}>Submit</button>
          <br />
          <br />
          {!height || !weight ? (
            <div></div>
          ) : (
            <div className = "resultFont">
              <label>
               Your bmi is {(weight / ((height * height) / 10000)).toFixed(2)}
              </label><br/>
              <div>
              {(() => {
              let bmi = (weight / ((height * height) / 10000)).toFixed(2);
              if (bmi < 18.6){
                  return (
                    <label> Under weight</label>
                  )
              }else if((bmi >= 18.6 && bmi < 24.9)){
                return (
                  <div>
                    <label>Your suggested weight range is between 50 - 67</label><br/>
                    <label>You are in a healthy weight range</label>
                  </div>
                )
              }else{
                return (
                  <label> Over weight</label>
                )
              }
            })()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
