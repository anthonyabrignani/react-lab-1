import { useState } from "react";
import "./Votes.css";

function Votes() {
  const [choc, setChoc] = useState(0);
  const [van, setVan] = useState(0);
  const [straw, setStraw] = useState(0);
  const cursive: any = { fontFamily: "Caveat, cursive" };

  function voteChoco() {
    setChoc((prev) => prev + 1);
  }

  function voteVan() {
    setVan((prev) => prev + 1);
  }

  function voteStraw() {
    setStraw((prev) => prev + 1);
  }

  let total = choc + van + straw;

  const chocolateBar: any = {
    width: (choc / total) * 100 + "%",
    height: "10px",
    backgroundColor: "#4f2c2c",
  };

  const vanillaBar = {
    width: (van / total) * 100 + "%",
    height: "10px",
    backgroundColor: "#cbc0ac",
  };

  const strawberryBar = {
    width: (straw / total) * 100 + "%",
    height: "10px",
    backgroundColor: "#de8c91",
  };

  let additionalClass1 = "";
  let additionalClass2 = "";
  let additionalClass3 = "";

  if (choc === 0) {
    additionalClass1 = "negative";
  }
  if (van === 0) {
    additionalClass2 = "negative";
  }
  if (straw === 0) {
    additionalClass3 = "negative";
  }

  return (
    <div className="Votes">
      <div>
        <h2 style={cursive}>Vote Here</h2>
      </div>
      <div>
        <button onClick={voteChoco}>Chocolate</button>
        <button onClick={voteVan}>Vanilla</button>
        <button onClick={voteStraw}>Strawberry</button>
      </div>
      <div>
        <h3>
          Chocolate: {choc}{" "}
          <div className={additionalClass1}>{(choc / total) * 100}%</div>
        </h3>
        <div className={additionalClass1} style={chocolateBar}></div>
      </div>
      <div>
        <h3>
          Vanilla: {van}{" "}
          <div className={additionalClass2}>{(van / total) * 100}%</div>
        </h3>
        <div className={additionalClass2} style={vanillaBar}></div>
      </div>
      <div>
        <h3>
          Strawberry: {straw}{" "}
          <div className={additionalClass3}>{(straw / total) * 100}%</div>
        </h3>
        <div className={additionalClass3} style={strawberryBar}></div>
      </div>
    </div>
  );
}

export default Votes;
