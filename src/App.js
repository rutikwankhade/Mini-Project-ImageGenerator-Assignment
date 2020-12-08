import "./css/App.css";
import React, { useState, useEffect } from "react";
import ImageDisplay from './components/ImageDisplay';

function App() {
  const [imgUrl, setImgUrl] = useState('');
  const [loading, setLoading] = useState(false);


  const getImage = () => {
    setLoading(true);
    fetch('https://picsum.photos/200/300')
      .then(res => res.url)
      .then(url => {
        setLoading(false);
        setImgUrl(url)
        console.log(url)
      })
      .catch(error => console.log(error))


  }


  useEffect(() => {
    getImage();

  }, [])
  return (
    <div className="App">
      <button onClick={() => getImage()}>Generate new Image</button>
      <ImageDisplay imgUrl={imgUrl} loading={loading} />
    </div>
  );
}

export default App;
