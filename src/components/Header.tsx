import { useState } from "react";
import "./Header.css";

interface Props {
  user: string;
}

function Header({user }: Props) {
  return (
    <header className="Header">
      <h1>Ice Cream Wars</h1>
      <p>Welcome {user}</p>
    </header>
  );
}

export default Header;
