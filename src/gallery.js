import './styles/gallery.css';
import './styles/nav.css';
import React, {useState, useEffect} from 'react';
import Loading from './loading';
import Error from './error';

function Gallery() {
  const [IsLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [img2Index, setImg2Index] = useState(-1);
  const [img1Index, setImg1Index] = useState(0);
  const imgSrcs = [
    'https://upload.wikimedia.org/wikipedia/commons/5/57/Bob_Moog3.jpg',
    'https://moa.byu.edu/wp-content/uploads/escher-relativity.jpg',
    'https://www.arshake.com/wp-content/uploads/2013/10/Construction-of-the-Z1-in-the-apartment-of-Zuses-parents.jpg'
  ];
  const [animateImg1, setAnimateImg1] = useState(false);
  const [switchImgTimeout, setSwitchImgTimeout] = useState(true);
  const [imgSwitched, setImgSwitched] = useState(false);

  useEffect(() => {
    try {
      setTimeout(() => {setIsLoading(false)}, 3400);
    } catch(error) {
      setTimeout(() => {setIsLoading(false)}, 3400);
      setIsError(true);
      console.log(error);
    }
  },[]);

  function switchImg(firstAnim){
    setSwitchImgTimeout(false);
    if(firstAnim){
      (img2Index + 2 === imgSrcs.length) ? setImg2Index(0) : (img2Index + 2 === imgSrcs.length + 1) ? setImg2Index(1) : setImg2Index(img2Index + 2);
      setTimeout(()=>{
        setSwitchImgTimeout(true);
      },2550)
    }
    else{
      (img1Index + 2 === imgSrcs.length) ? setImg1Index(0) : (img1Index + 2 === imgSrcs.length + 1) ? setImg1Index(1) : setImg1Index(img1Index + 2);
      setTimeout(()=>{
        setSwitchImgTimeout(true);
      },2550)
    }
    setAnimateImg1(!animateImg1);
    setImgSwitched(true);
  }

  if(IsLoading){
    return <Loading/>;
  }
  else if(isError){
    return <Error setIsLoading={setIsLoading} setIsError={setIsError}/>;
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
          <h1 className="title">Gallery</h1>
          <div className="imgs">
            <img src={imgSrcs[img2Index]} style={(animateImg1) ? {animation: 'switchImg2 2.55s ease-out forwards',  position: 'static'} : (imgSwitched) ? {animation: 'switchImg1 1.7s ease-in-out forwards', position: 'absolute', right: '44.5vw'} : null} onClick={()=>(!switchImgTimeout) ? null : switchImg(false)} />
            <img src={imgSrcs[img1Index]} style={(animateImg1) ? {animation: 'switchImg1 1.7s ease-in-out forwards',  position: 'absolute', right: '44.5vw'} : (imgSwitched) ? {animation: 'switchImg2 2.55s ease-out forwards'}  : null} onClick={()=>(!switchImgTimeout) ? null : switchImg(true)} />
          </div>
          <h1>Click to change image.</h1>
        </main>
      </div>
    );
  }
}

export default Gallery;
