import React from "react";
import s from "../styles/Header.module.css";

function Header() {
  return (
    <div className={s.memeGeneratorHeaderContainer}>
      <div className={s.memeGeneratorHeader}>
        <img src="" alt="Logo" />
        <h2>Meme Generator</h2>
      </div>
    </div>
  );
}

export default Header;
