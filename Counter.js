import React, { useState } from 'react';

const Counter = () => {

    const [info, setInfo] = useState(0);
    // const[plus, setPlus]=useState();
    // const[minus, setMinus]=useState();

    const increment = () => {

        return setInfo(info + 1);

    }

    const decrement = () => {

        if (info > 0) {
            return setInfo(info - 1);
        }
    }

        return (
            <>
                <div>
                    <h1>{info}</h1>
                    <button onClick={increment}>PLUS</button>
                    <button onClick={decrement}>MINUS</button>
                </div>
            </>
        );
    }

    export default Counter;