import React from 'react';
import './index.css';


function Navigation() {

    function getCurrentDate(separator = '-') {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.toLocaleString('default', { month: 'short' });
        let year = newDate.getFullYear();

        return `${date}${separator}${month}${separator}${year}`
    }
    return (
        <div className="navbar">
            <div>
                <div className="dropdown home">
                    <button className="dropbtn home">Home</button>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Work</button>
                    <div className="dropdown-content">
                        <a href="wyattlarson.net">Link 1</a>
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
                    {getCurrentDate()}
                </div>
                <div className='circles'>
                    <div className="circle orange"></div>
                    <div className="circle green"></div>
                    <div className="circle red"></div>
                </div>
            </div>

        </div>
    );
}

export default Navigation;
