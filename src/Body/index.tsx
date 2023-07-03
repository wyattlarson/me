import React from 'react';
import './index.css';
import Walmart from './Walmart';


function Body() {
    return (
        <div className='body'>
            <div className='window'>
                <Walmart />
                {/* <Scandia /> */}
            </div>
        </div>
    );
}

export default Body;
