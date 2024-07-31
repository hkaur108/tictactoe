import React from 'react';
import '../App.css';

export default function Block({value,clickState}) {
  return (
    <div>
      <button type="button" className='btn ' onClick={clickState}>{value}</button>
    </div>
  )
}
