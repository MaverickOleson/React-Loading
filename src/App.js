import './styles/gallery.css';
import React, {useState, useEffect} from 'react';
import Loading from './loading';

function App() {
  const [IsLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [img1Index, setImg1Index] = useState(0);
  const [img2Index, setImg2Index] = useState(1);
  const imgSrcs = [
    'https://upload.wikimedia.org/wikipedia/commons/5/57/Bob_Moog3.jpg',
    'https://moa.byu.edu/wp-content/uploads/escher-relativity.jpg',
    'https://www.arshake.com/wp-content/uploads/2013/10/Construction-of-the-Z1-in-the-apartment-of-Zuses-parents.jpg'
  ];
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    try {
      setTimeout(() => {setIsLoading(false)}, 3400);
    } catch(error) {
      setError(error);
    }
  },[]);

  function switchImg(){
    (img2Index + 1 === imgSrcs.length) ? setImg2Index(0) : setImg2Index(img2Index + 1);
    setAnimate(true);
    setTimeout(()=>{(img1Index + 1 > imgSrcs.length) ? setImg1Index(1) : setImg1Index(img1Index + 1); setAnimate(false)}, 2000);
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
            <img src={imgSrcs[img2Index]} style={(animate) ? {animation: 'switchImg1 2s linear'} : {}} />
            <img src={imgSrcs[img1Index]} style={(animate) ? {animation: 'switchImg2 2s linear'} : {}} onClick={()=>switchImg()} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
