import React from 'react'
import Counter from './Counter'
function Cartitem(props) {
    return (

        /* membuat item cart */
        <div style={{ display: "flex" }}>
            <span>{props.hewan}</span>
            {/* Jumlah */}
            <Counter />
        </div>
    )
}

export default Cartitem