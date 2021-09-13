import './styles/App.css';
import './styles/pyramid.css';
import React, {useState, useEffect} from 'react';
import Loading from './loading';

function App() {
  const [IsLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [imgRotate, setImgRotate] = useState(0);
  const imgSrcs = [
    'https://upload.wikimedia.org/wikipedia/commons/5/57/Bob_Moog3.jpg',
  ]
  useEffect(() => {
    try {
      setTimeout(() => {setIsLoading(false)}, 3400);
    } catch(error) {
      setError(error);
    }
  },[]);
  if(IsLoading){
    return <Loading/>;
  }
  else if(Error){
    return <h1>WHAHAHAT?</h1>;
  }
  else{
    return (
      <div className="App">
        <nav>
          <h1>Home</h1>
          <h1>Gallery</h1>
          <h1>Biography</h1>
        </nav>
        <main>
          <h1>Gallery</h1>
          <div className="galleryBox">
            <img src={imgSrcs[imgRotate]} alt="" />
            <img src="" alt="" />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
