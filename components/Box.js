import { useState } from 'react';


function Box(props) {

    const item = props.item;

    return(
        <div className="main-div">
            <img src={item.img} id="img" alt="img-1"/>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <button id="join-btn">Add to cart</button>
        </div>
    );
}

export default Box;
