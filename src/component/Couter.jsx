import React from 'react'
import { useState } from 'react';

function Couter() {
    /* membuat sebuat state */
    const [count, setCount] = useState(0)

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (

        <div>
            {/* membuat sebuag state */}
            <button onClick={decrement}>-</button>
            <span> {count} </span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Couter