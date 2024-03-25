import React from 'react';
import './home.css';
import Profile from './profile.jpg'


function Home(props: any) {
    // const myRef = useRef(document.createElement("div"));
    // const executeScroll = () => myRef.current.scrollIntoView()
    let developerColor = props.activeColor === "rgb(40, 39, 37)" ? "#7676bf" : props.activeColor;

    return (
        <div className='homePage'>
            <div className='homeBanner'>
                <div className='wyatt'>wyatt larson</div>
                <img className='profile' src={Profile} alt='profile' />
            </div>
            {/* <div className='fullstack'>I am a jack of all trades, some call it a <span className='developer' style={{color: developerColor}}>fullstack developer</span></div> */}
            <div className='fullstack'><span className='developer' style={{color: developerColor}}>Coming Soon</span></div>

            {/* <div className='scandia' ref={myRef}>I worked at scandia</div> */}
        </div>
    );
}

export default Home;
