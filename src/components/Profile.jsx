import React from 'react'
import Avatar from "./Avatar";

export default function Profile({image, isNew, name, title}) {
  return (
    <div className='profile'>
      <Avatar
        image={image}
        isNew={isNew}></Avatar>
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}