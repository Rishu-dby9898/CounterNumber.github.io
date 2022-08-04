import React from 'react';
import Button from '@mui/material/Button';



function Port(props) {
    console.log(JSON.stringify(props));
    const{link,Name,release,genere,rating,movie}=props;
    // console.log(props);
    return (
        <>
            <div className="container">
                <img src={link} className="img" alt="img1"></img>
                <div className="fool">
                    <p className="h2">{Name}:{movie}</p>
                    <p className="p1">{release}</p>
                    <p className="p1">{genere}</p>
                    <p className="p1">{rating}</p>
                    <Button variant="contained">WATCH NOW</Button>
                </div>

            </div>
        </>
    );
}

export default Port;