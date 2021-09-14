import './styles/gallery.css';
import React, {useState, useEffect} from 'react';
import Loading from './loading';

function App() {
  const [IsLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [imgIndex, setImgIndex] = useState(1);
  const imgSrcs = [
    'https://upload.wikimedia.org/wikipedia/commons/5/57/Bob_Moog3.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/57/Bob_Moog3.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/57/Bob_Moog3.jpg'
  ]
  useEffect(() => {
    try {
      setTimeout(() => {setIsLoading(false)}, 3400);
    } catch(error) {
      setError(error);
    }
  },[]);
  function switchImg(){
    (imgIndex + 1 < imgSrcs.length) ? setImgIndex(imgIndex + 1) : setImgIndex(1);
    setImgIndex(imgIndex + 1);
  }
  if(IsLoading){
    return <Loading/>;
  }
  else if(Error){
    return <h1>WHAHAHAT?</h1>;
  }
  else{
    return (
      <div className="gallery">
        <nav>
          <h1>Home</h1>
          <h1>Gallery</h1>
          <h1>Biography</h1>
        </nav>
        <main>
          <h1>Gallery</h1>
          <div className="imgs">
            <img src={imgSrcs[imgIndex]} style={(imgIndex % 2 == 0) ? {animation: 'switchImg1 2s linear'} : {}} />
            <img src={imgSrcs[imgIndex - 1]} style={(imgIndex % 2 == 0) ? {animation: 'switchImg2 2s linear'} : {}} onClick={()=>switchImg()} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
