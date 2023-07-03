import React from 'react';
import './index.css';
import Walmart from './Walmart';
import Scandia from './Scandia';


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
