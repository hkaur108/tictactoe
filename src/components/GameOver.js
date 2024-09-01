import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function GameOver() {
    const navigate= useNavigate();

    const navigateToForm =()=>{
      navigate('/')
      localStorage.clear()
    }

  return (
    <div className='w-75 vh-75 p-5 m-5 mx-auto game formStyling'>
      <div className='text-center p-3 m-3'>
         <h3 className='text-secondary'> Thanks for Playing!</h3>
      </div>
     <div className='d-flex justify-content-center'>
        <button className=' btn btn-outline play-button text-secondary' onClick={navigateToForm}>Play Again!</button>
     </div>
    </div>
  )
}
