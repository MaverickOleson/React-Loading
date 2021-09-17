import './styles/error.css';
import React from 'react'

const Error = ({setIsLoading, setIsError}) => {
    function reload(){
        try {
            setTimeout(() => {setIsLoading(false)}, 3400);
        } catch(error) {
            setIsError(true);
        }
    }
    return (
        <div className='error'>
            <h1>Error Loading<br/>Page</h1>
            <button onClick={()=>reload()}><h1>Try again?</h1></button>
        </div>
    )
}

export default Error
