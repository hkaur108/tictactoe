import React from 'react'
import { useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';
import Score from './Score';
import "../App.css";

export default function Form() {

    const navigate =useNavigate();
    const localStorageKey="players"
    const [data,setData] = useState({player1:"",player2:""})
    const [showGame,setshowGame] =useState(false);
 
    useEffect(()=>{
      localStorage.setItem(localStorageKey,JSON.stringify(data))
      
    },[data])


    const handleChange =(e)=>{
      setData((prev)=>({
          ...prev,[e.target.name]:e.target.value
      }))
    }


    const navigateToBoard =()=>{
        navigate('/board')
    }

    const handleSubmit =(e) =>{
      e.preventDefault()

      if(data.player1==="" || data.player2===""){
        alert("all fields are mandatory!")
        return
      }
        setshowGame(!showGame)

    }

      
  return (
    <div className='container w-50'>
        <h2 className='text-center p-2 mt-5 fst-italic text-light'>Let's Play Tic Tac Toe!</h2>
        <h4 className='text-center p-1 text-light '>Enter player's names.</h4>
        <div className='formStyling'>
          <form  className="p-3 m-2 " onSubmit={handleSubmit}>
        <div className='form-group '>
            <label className='fw-bold m-1 text-secondary'>First Players's name</label>
            <input className='form-control bg-white text-capitalize' 
            type="text" 
            placeholder='Enter name' 
            name='player1' 
            value={data.player1} 
            onChange={handleChange} 
            autoComplete='off'
            maxLength={25}
            required 
            pattern='[A-Za-z]+'/>
        </div>
        <div className='form-group'>
            <label className='fw-bold m-1 text-secondary'>Second Player's name</label>
            <input className='form-control bg-white text-capitalize' 
            type="text" 
            placeholder='Enter name' 
            name='player2' 
            value={data.player2} 
            onChange={handleChange} 
            maxLength={25}
            autoComplete='off'
            required
            pattern='[A-Za-z]+' />
        </div>
        <div className='d-flex align-items-center justify-content-center'>
            <button className='btn btn-outline m-3 text-secondary' type='submit'>Submit</button>
        </div>
      </form>

        </div>
      {showGame && <div className='d-flex align-items-center justify-content-center'> <button className='w-50 m-3 btn btn-outline text-light' onClick={()=>navigateToBoard()}>Click to Play Game</button></div>}

    </div>
  
  )
}
