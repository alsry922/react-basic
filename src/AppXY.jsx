import React, {useState} from 'react'
import './AppXY.css'
export default function AppXy() {
    const [pointer, setPointer] = useState(initialState);
    const handlePointerMove = (event) => {
        console.log(event.clientX, event.clientY);
        setPointer({x: event.clientX, y: event.clientY});
    }
    return (
        <div className='container'
             onPointerMove={(event) => {
                 console.log(event.clientX, event.clientY);
                 setPointer({x: event.clientX, y: event.clientY});
             }}>
            <div className='pointer'
                 style={{transform:`translate(${pointer.x}px, ${pointer.y}px)`}}></div>
        </div>
    );
}

const initialState = {
    x: 0,
    y: 0
};
