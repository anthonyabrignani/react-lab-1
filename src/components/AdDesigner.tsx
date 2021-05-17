import { useState } from "react";
import "./AdDesigner.css";

function AdDesigner() {
  const [cream, setCream] = useState("Strawberry");
  const [light, setLight] = useState("Light");
  const [font, setFont] = useState(22);
  const styles: any = { fontSize: font + "px", fontFamily: "Caveat, cursive" };
  const cursive: any = { fontFamily: "Caveat, cursive" };

  let addClass = "";
  if (light === "Light") {
    addClass = " Light";
  } else if (light === "Dark") {
    addClass = " Dark";
  }

  function turnLight() {
    setLight((prev) => (prev = "Light"));
  }

  function turnDark() {
    setLight((prev) => (prev = "Dark"));
  }

  function chocolate() {
    setCream((prev) => (prev = "Chocolate"));
  }

  function vanilla() {
    setCream((prev) => (prev = "Vanilla"));
  }

  function strawberry() {
    setCream((prev) => (prev = "Strawberry"));
  }

  function fontUp() {
    setFont((prev) => prev + 1);
  }

  function fontDown() {
    setFont((prev) => prev - 1);
  }

  return (
    <div className={"AdDesigner" + addClass}>
      <div>
        <h2 style={cursive}>Ad Designer</h2>
      </div>
      <div>
        <p className="TheBox"><h4>Vote For</h4>
        <h5 style={styles}>{cream}</h5>
        </p>
      </div>
      <div>
        <h3>What to Support</h3>
      </div>
      <div>
        <button disabled={cream === "Chocolate"} onClick={chocolate}>Chocolate</button>
        <button disabled={cream === "Vanilla"} onClick={vanilla}>Vanilla</button>
        <button disabled={cream === "Strawberry"} onClick={strawberry}>Strawberry</button>
      </div>
      <div>
        <h3>Color Theme</h3>
      </div>
      <div>
        <button disabled={light === "Light"} onClick={turnLight}>Light</button>
        <button disabled={light === "Dark"} onClick={turnDark}>Dark</button>
      </div>
      <div>
        <h3>Font Size</h3>
      </div>
      <div>
        <button onClick={fontDown}>Down</button> 
        {font} 
        <button onClick={fontUp}>Up</button>
      </div>
    </div>
  );
}

export default AdDesigner;
