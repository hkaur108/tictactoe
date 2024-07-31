import React from 'react'
import { useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';
import Score from './Score';

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
        <h1 className='text-center p-2 m-3'>Let's Play Tic Tac Toe</h1>
        <h3 className='text-center p-2'>Enter player's names.</h3>
      <form  className="p-3 m-2 border border-dark" onSubmit={handleSubmit}>
        <div className='form-group '>
            <label className='fw-bold m-1'>Enter Player1's name</label>
            <input className='form-control bg-light' type="text" placeholder='Enter name' name='player1' value={data.player1} onChange={handleChange}  />
        </div>
        <div className='form-group'>
            <label className='fw-bold m-1'>Enter Player2's name</label>
            <input className='form-control bg-light' type="text" placeholder='Enter name' name='player2' value={data.player2} onChange={handleChange}  />
        </div>
        <div className='d-flex align-items-center justify-content-center'>
            <button className='btn btn-outline m-3' type='submit'>Submit</button>
        </div>
      </form>
      {showGame && <div className='d-flex align-items-center justify-content-center'> <button className='w-50 m-3 btn btn-outline' onClick={()=>navigateToBoard()}>Click to Play Game</button></div>}

    </div>
  
  )
}
