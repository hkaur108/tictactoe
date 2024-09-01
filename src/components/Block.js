import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Block({value,clickState}) {
  return (
    <div>
      <button type="button" className='btn btn-outline ' onClick={clickState}>
        <p className='text-secondary'>{value}</p>
        </button>
    </div>
  )
}
