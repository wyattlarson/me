import React, { useEffect, useState } from 'react';
import './navigation.css';
import { Link } from 'react-router-dom';


function Navigation(props: any) {
    const [fullDate, setFullDate] = useState("");

    useEffect(() =>{
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.toLocaleString('default', { month: 'short' });
        let year = newDate.getFullYear();
        setFullDate(`${date}-${month}-${year}`)
    },[]);

    return (
        <div className="navbar">
            <div>
                <div className="dropdown ">
                    <button className="dropbtn home"><Link to='/' className="dropbtn home">Home</Link></button>
                    
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Work</button>
                    <div className="dropdown-content">
                        <Link to='/walmart'>Walmart</Link>
                        <a href="wyattlarson.net">Link 2</a>
                        <a href="wyattlarson.net">Link 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Favorites</button>
                    <div className="dropdown-content">
                        <a href="wyattlarson.net">Link 1</a>
                        <a href="wyattlarson.net">Link 2</a>
                        <a href="wyattlarson.net">Link 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Social</button>
                    <div className="dropdown-content">
                        <a href="https://www.linkedin.com/in/wyatt-larson/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className='misc'>
                <div className='date'>
                    {fullDate}
                </div>
                <div className='circles'>
                    <div onClick={() => props.setActiveColor("#f37725")} className="circle orange"></div>
                    <div onClick={() =>props.setActiveColor("#6DB3F2")} className="circle blue"></div>
                    <div onClick={() => props.setActiveColor("rgb(40, 39, 37)")} className="circle black"></div>
                </div>
            </div>

        </div>
    );
}

export default Navigation;
