import React from 'react'
import './AppXY.css'
export default function AppXy() {
  const handleMouseMove = (event) => {
    const $pointer = document.querySelector('.pointer');
    console.log($pointer);
    const x = event.clientX;
    const y = event.clientY;
    $pointer.style.left = `${x-15}px`;
    $pointer.style.top = `${y-15}px`;
  }
  return (
    <div className='container'
         onMouseMove={handleMouseMove}>
      <div className='pointer'></div>
    </div>
  );
}
