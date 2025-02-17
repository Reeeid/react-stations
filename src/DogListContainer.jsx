import "./App.css";
import React, { useState, useEffect } from 'react';
import BreedsSelect from './BreedsSelect';

export const DogListContainer = () => {
  const [dogUrl, setDogUrl] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('hound');

  // 犬種リストを取得
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => setBreeds(Object.keys(data.message)))
      .catch(error => console.error("Fetch error:", error));
  }, []);

  // 画像を取得する関数
  const fetchImage = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then((response) => response.json())
      .then((data) => setDogUrl(data.message))
      .catch(error => console.error("Fetch error:", error));
  };

  // 初回マウント時に画像を取得
  useEffect(() => {
    fetchImage();
  }, []);

  // 選択が変更された場合は、状態だけ更新（画像はボタンで更新）
  const handleChange = (e) => { 
    setSelectedBreed(e.target.value); 
  };

  const DogUrlList = dogUrl.map((url, index) => (
    <img key={index} width="300px" height="200px" src={url} alt={selectedBreed} />
  ));

  return (
    <div className="center-container">
      <div className="controls">
        <BreedsSelect 
          breeds={breeds} 
          selectedBreed={selectedBreed} 
          onChange={handleChange} 
        />
        <button className="update-button" onClick={fetchImage}>更新</button>
      </div>
      <div className="dog-list">
        {DogUrlList}
      </div>
    </div>
  );
};

export default DogListContainer;
