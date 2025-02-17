// @ts-check
import "./App.css"
import React, { useState } from 'react';
import DogImage from './DogImage';
export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg ")
    
    function handleClick() {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then((Response) => Response.json())
      .then((data) => {
         setDogUrl(data.message)
      });
    }
    return (<div id="ItemContainer">
      <p id="Item1">犬の画像を表示するサイト</p>
      <DogImage imageUrl={dogUrl}/>
      <button id="Item3" onClick={handleClick}>更新</button>
    </div>)
}

export default Description
