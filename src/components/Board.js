import React, {useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Block from './Block';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Score from './Score';



export default function Board() {
    const localStorageKey="players"
    const navigate=useNavigate();
    const[states,setstates] =useState(Array(9).fill(null));
    const[xIsNext,setxIsNext] =useState(true);
    const [count,setcount] = useState(-1);
    const [scorePlayer1,setscorePlayer1] = useState(0);
    const [scorePlayer2,setscorePlayer2] = useState(0);
    const[names,setnames] =useState(()=>
    localStorage.getItem(localStorageKey) ? JSON.parse(localStorage.getItem(localStorageKey)):[]);
    const [playAgain,setplayAgain] = useState(false);
    let status;
    let winner=checkWinner(states);

    useEffect(()=>{
        setcount(count=>count+1)
    },[states])

    useEffect(()=>{
        if(winner){
            if(winner==="X"){
                setscorePlayer1((scorePlayer1) =>scorePlayer1+1)
            }
            else{
            setscorePlayer2((scorePlayer2) =>scorePlayer2+1)
        }
    }
    },[winner])

    
    let firstPlayer= "";
    let secondPlayer= "";

    if(names ===null){
        firstPlayer="X";
        secondPlayer="O";
    }
    else{
        firstPlayer=names.player1;
        secondPlayer=names.player2;
    }

    if(winner){
        status=`Winner is ${winner}!`
        if(winner==="X"){
            status= `Winner is ${ firstPlayer}`;
        }
        else if(winner ==="O"){
            status= `Winner is ${ secondPlayer}`;   
        }
        
    }
    else if(count===10 && !winner){
        status="It's a draw!"
    }
    else{
        status=`Next player : `+ (xIsNext? firstPlayer : secondPlayer)
    }

    let nextSquares= states.slice();

    const handleClick=(i)=>{
        if(checkWinner(states) || states[i]){
            return
        }
        console.log(nextSquares)
    checkWinner(nextSquares);
    xIsNext?nextSquares[i]="X":nextSquares[i]="O";
    setstates(nextSquares)
    setxIsNext(!xIsNext)
    }

    const handleRefresh = ()=>{
    while(nextSquares.length>0){
        nextSquares.pop()
    }
    setstates(nextSquares)
    }

    
    const handlePlayAgain=()=>{
        setplayAgain(!playAgain)
        if(!playAgain){
            handleRefresh()
            return
        }

    }
    const navigateToGameOver =()=>{
        navigate("/gameOver")
    }

return (
    <>
    <h1 className='text-center p-2 m-1  text-decoration-underline'>Tic Tac Toe Game</h1>
    <h2 className='text-center p-3 m-1 text-capitalize '>{status}</h2>
    <Score names={names} scorePlayer1 ={scorePlayer1} scorePlayer2={scorePlayer2}/>
    <div className='position-relative w-100 h-100 mx-auto'>
        <div className='w-50 mx-auto p-3 d-flex align-items-center justify-content-center'>
        <div className='' >
            <Block value={states[0]}  clickState={()=>handleClick(0)}/>
            <Block value={states[1]}  clickState={()=>handleClick(1)}/>
            <Block value={states[2]}  clickState={()=>handleClick(2)}/>

        </div>
        <div className=''>
            <Block value={states[3]} clickState={()=>handleClick(3)}/>
            <Block value={states[4]} clickState={()=>handleClick(4)}/>
            <Block value={states[5]} clickState={()=>handleClick(5)}/>
        </div>
        <div className=''>
            <Block value={states[6]} clickState={()=>handleClick(6)}/>
            <Block value={states[7]} clickState={()=>handleClick(7)}/>
            <Block value={states[8]} clickState={()=>handleClick(8)}/>
        </div>
    </div>
    <div className='d-flex justify-content-center'>
        <button type='button' className='m-2 btn btn-outline p-1' onClick={()=>handleRefresh()}>Restart</button>
    </div>
     <div className='d-flex align-items-center justify-content-center m-3'>
        {winner ?<button className='btn btn-outline' onClick={handlePlayAgain}>Play another game!</button>:<button className='btn btn-outline' onClick={navigateToGameOver}>Exit</button>}
    </div>
    </div>
    
   

    </>
)
}

function checkWinner(states){
        const winningConditions=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],

    ];
        for(let i=0;i<winningConditions.length;i++){
            const [a,b,c] = winningConditions[i];
            if(states[a] && states[a]===states[b] && states[a] ===states[c]){
                return states[a];
            }


            }
            return false;
        }
