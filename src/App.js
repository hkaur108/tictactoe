import React from 'react';
import Board from './components/Board';
import Form from './components/Form';
import  GameOver from './components/GameOver';
import { useState, useEffect } from 'react';
import {Routes,Route,useNavigate} from 'react-router-dom';

export default function App() {
  const navigate=useNavigate();
    const [getnames,setgetnames] = useState([]);
    
    function getInfo(info){
        setgetnames([...getnames,info])

    }

 

    const navigateToForm =()=>{
      navigate('/')
    }

    const navigateToBoard =()=>{
      navigate('/board')
    }

    

  
  return (
    <div>
      <Routes>
        <Route  path="/" element={<Form getInfo={getInfo}/>}/>
        <Route path='/board' element={<Board getnames={getnames}/>}/>
        <Route path='/gameOver' element={<GameOver/>}/>
      </Routes> 
    </div>
  )
}

