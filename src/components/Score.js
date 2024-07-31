import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Score({names,scorePlayer1,scorePlayer2}) {

  return (
    <div className='mx-auto '>
        <h4 className='text-center text-capitalize'>{`${names.player1}'s score is ${scorePlayer1}`}</h4>
        <h4 className='text-center text-capitalize'>{`${names.player2}'s score is ${scorePlayer2}`}</h4>

    </div>
  )
}
