import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Score({names,scorePlayer1,scorePlayer2}) {

  return (
    <div className='mx-auto container w-50 '>
      <div className="row">
        <div className="col-6">
            <h5 className='text-center text-secondary'>{`${names.player1}'s score is ${scorePlayer1}`}</h5>
        </div>
        <div className="col-6">
            <h5 className='text-center text-secondary'>{`${names.player2}'s score is ${scorePlayer2}`}</h5>
        </div>

      </div>

    </div>
  )
}
