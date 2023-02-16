import React from "react";
import s from "../styles/Meme.module.css";
import MemeData from "../styles/helpers/MemeData";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, getAllMemeImages] = React.useState(MemeData);

  function getMeme(e) {
    e.preventDefault();
    const memeArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);

    const topText = meme.topText;
    const bottomText = meme.bottomText;

    const randomUrl = memeArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: randomUrl,
    }));
  }

  return (
    <div className={s.memeContainer}>
      <form action="">
        <button onClick={getMeme} type="submit">
          Get new random image
        </button>
        <div className={s.inputContainer}>
          <input type="text" name="" id="" placeholder="Top text" />
          <input type="text" name="" id="" placeholder="Bottom text" />
        </div>
        <img src={meme.randomImage} alt="" className={s.memeImage} />
      </form>
    </div>
  );
}

export default Meme;
