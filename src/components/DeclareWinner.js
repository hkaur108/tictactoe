import React from 'react'
import Confetti from 'react-confetti';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

export const DeclareWinner = () => {
    let width=200;
    let height=400;
    let numberOfPieces=60;
    let confettiSource ={
      x:0,y:0,w:5000,h:700,
    };
    let wind=1;

return (
    <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
    <Confetti
      width={width}
      height={height}
      numberOfPieces={numberOfPieces}
      confettiSource={confettiSource}
      wind={wind}
      drawShape={ctx => {
    ctx.beginPath()
    for(let i = 0; i < 22; i++) {
      const angle = 0.1 * i
      const x = (0.50 + (1.50 * angle)) * Math.cos(angle)
      const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
    ctx.lineTo(x, y)
    }
    ctx.stroke()
    ctx.closePath()
    }}
    />
    </div>
   
  )
}