import React, { useRef } from 'react';
import './index.css';


function Walmart() {
    const myRef = useRef(document.createElement("div"));
    const executeScroll = () => myRef.current.scrollIntoView()
    return (
        <div>
            <div className='walmart' onClick={executeScroll}>wyatt larson</div>
            <div className='scandia' ref={myRef}>I worked at scandia</div>
        </div>
    );
}

export default Walmart;
