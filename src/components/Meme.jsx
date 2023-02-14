import React from "react";
import s from "../styles/Meme.module.css";
import MemeData from "../styles/helpers/MemeData";

function Meme() {
  function callAPI(e) {
    e.preventDefault();
    console.log(MemeData.data.memes[5].url);
  }

  return (
    <div className={s.memeContainer}>
      <form action="">
        <button onClick={callAPI} type="submit">
          Get new random image
        </button>
        <div className={s.inputContainer}>
          <input type="text" name="" id="" placeholder="Top text" />
          <input type="text" name="" id="" placeholder="Bottom text" />
        </div>
      </form>
    </div>
  );
}

export default Meme;
