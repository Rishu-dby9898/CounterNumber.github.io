
import React, { useState } from 'react';

const Bmi = () => {

    const [num, setNum] = useState(0);
    const [info, setInfo] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
  

    const handleBmi = () => {
        let val = ([Number(weight) / Number(height) / Number(height)] * 10000).toFixed(1);
        setNum(val);

        if (val < 18.5) {
            setInfo("Under weight");
        }
        else if (val > 18.5 && val <= 24.9) {
            setInfo("healthy");
        }
        else if (val > 24.9 && val < 30) {
            setInfo("overWeight");
        }
        else {
            setInfo("obesed");
        }

        };

    const Reset = () => {
        return (setNum(0),setInfo(""));
        
    };

    return (
        <>

        <div>
            <h1>BMI CALCULATOR</h1>
            <h2>{num}</h2>
            <h3>{info}</h3>
            <input type="text" onChange={(e) => setHeight(e.target.value)} placeholder="enter your height" /><br />
            <input type="text" onChange={(e) => setWeight(e.target.value)} placeholder="enter your weight" /><br />
            <button onClick={handleBmi}>CALCULATE</button>
            <button onClick={Reset}>Reset</button>
        </div>
        
        </>

    );
}

export default Bmi;