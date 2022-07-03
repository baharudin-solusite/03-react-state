import React from 'react'
import { useState } from 'react';

function Couter() {
    /* membuat sebuah state */
    const [count, setCount] = useState(0)

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (

        <div>
            {/* membuat sebuah state */}
            {/* membuat sebuah couter bagaimana nantinya nilai yang dihasilkan tidak minus */}
            <button onClick={decrement}>-</button>
            <span> {count} </span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Couter