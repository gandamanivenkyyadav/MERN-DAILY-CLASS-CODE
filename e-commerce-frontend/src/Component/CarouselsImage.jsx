import React from 'react'

const CarouselsImage = (props) => {
    return (
        <div>

            <img src={props.text} style={{height: "400px" ,width: "100vw"  }} alt="" />

        </div>
    )
}

export default CarouselsImage;