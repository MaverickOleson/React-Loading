import './styles/App.css';
import React, {useState, useEffect} from 'react';
import Loading from './loading';

function App() {
  const [IsLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(false);
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
        <h1>sf</h1>
      </div>
    );
  }
}

export default App;
