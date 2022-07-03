import React from 'react'
import Couter from './Couter'
function Cartitem(props) {
    return (

        /* membuat item cart */
        <div style={{ display: "flex" }}>
            <span>{props.hewan}</span>
            {/* nila */}
            <Couter />
        </div>
    )
}

export default Cartitem