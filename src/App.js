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
    //why is upon refreshing value is not staying in local storage, state is going back to null
    console.log(getnames, "app")

 

    const navigateToForm =()=>{
      navigate('/')
    }

    const navigateToBoard =()=>{
      navigate('/board')
    }

    

  
  return (
    <div>
      {/* <button className='btn btn-outline' onClick={navigateToBoard}>Board</button> */}
      {/* <button className='btn btn-outline' onClick={navigateToForm}>Form</button> */}
      <Routes>
        <Route  path="/" element={<Form getInfo={getInfo}/>}/>
        <Route path='/board' element={<Board getnames={getnames}/>}/>
        <Route path='/gameOver' element={<GameOver/>}/>
      </Routes> 
    </div>
  )
}

// we should first be able to display the name of players in the next player field and display the name of the winner
// fix local storage.

// when  the form is filled then only it should display the game board button and allow the player to go to the
//board and start game else display error. fields empty

//when the winner / draw is declared then we can ask the same players to continue or exit

// if(winner){
//   <button onclick={checkresponse}>Wanna play another game?</button>
//   //if yes, then only refkesh the window but keep playing withe same vakyes and persist them 
//   //if response if no/false then display the exit button and then should bring another page saying 
//   // "thanks for playing" with  "play again button " which will bring the player to the form page again

// }

// if continue then local storage should retain the names of the player and if exit is selected then it should clear the local storage.

// once we have achieved all these tasks then we can commit all the changes to the github and then make a detailed
// report of the project listing your learnings.