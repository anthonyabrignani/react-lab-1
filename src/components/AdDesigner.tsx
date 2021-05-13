import { useState } from "react";
import "./AdDesigner.css";

function AdDesigner() {
  const [cream, setCream] = useState("Strawberry");
  const [light, setLight] = useState("Light");
  const [font, setFont] = useState(22);
  const styles = {font-size: font + "px"}

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
      <h2>Ad Designer</h2>
      <a></a>
      <h4>Vote For {cream}</h4>
      <h3>What to Support</h3>
      <button onClick={chocolate}>Chocolate</button>
      <button onClick={vanilla}>Vanilla</button>
      <button onClick={strawberry}>Strawberry</button>
      <h3>Color Theme</h3>
      <button onClick={turnLight}>Light</button>
      <button onClick={turnDark}>Dark</button>
      <h3>Font Size</h3>
      <button onClick={fontDown}>Down</button>
      <p>{font}</p>
      <button onClick={fontUp}>Up</button>
    </div>
  );
}

export default AdDesigner;
