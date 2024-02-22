import React, { useEffect, useRef } from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import './index.css';
import Home from './Home/home';
import Walmart from './Walmart/walmart';


function Body(props: any) {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            // Adjust the playback rate of the video
            videoRef.current.playbackRate = 0.6; // Example: 0.5 for half speed
        }
    }, []);
    return (
        <div className='body'>
            <video autoPlay muted loop className='background-video' ref={videoRef}>
                <source src="https://firebasestorage.googleapis.com/v0/b/wyattlarsonblog.appspot.com/o/Untitled.mov?alt=media&token=0d1af663-8427-43c9-9685-564c2d7ac54f" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
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
