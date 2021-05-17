import React from "react";
import "./App.css";
import Header from "./components/Header";
import AdDesigner from "./components/AdDesigner";
import Votes from "./components/Votes";
import Ad from "./components/Ad";

function App() {
  return (
    <div className="App">
      <Header user="Zenko" />
      <section className="Container">
        <Ad ads={{ flavor: "Chocolate", fontSize: 24, darkTheme: true }} />
        <Ad ads={{ flavor: "Vanilla", fontSize: 36, darkTheme: false }} />
        <Ad ads={{ flavor: "Strawberry", fontSize: 40, darkTheme: true }} />
      </section>
      <AdDesigner />
      <Votes />
    </div>
  );
}

export default App;
