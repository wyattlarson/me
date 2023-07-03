import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import './index.css';
import Home from './Home/home';
import Walmart from './Walmart/walmart';


function Body(props: any) {
    let bodyStyle = {
        'backgroundImage': `url("https://assets.website-files.com/5bac0565754dd6b3e278aeb2/5bac0565754dd6780a78af19_deckstop-background.svg"), linear-gradient(to right, ${props.activeColor}, ${props.activeColor})`
    }

    return (
        <div className='body' style={bodyStyle}>
            <div className='window'>
                <Routes>
                    <Route path="/" element={<Home activeColor={props.activeColor} />} />
                    <Route path="/walmart" element={<Walmart />} />
                </Routes>
            </div>
        </div>
    );
}

export default Body;
