import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Icons/SunnyLogo.png' 
import OutsideClickHandler from 'react-outside-click-handler';

function Nav(props) {

const [hidden, setHidden] = useState(false);

const close = () => {
    setHidden(!hidden);
}

    return (
        <>
        <div className='Nav-Component-Container'>
            <img src={Logo} alt='Logo' className='Logo'/>
            <nav class='Nav-Container'>
                <ul className='Nav-Unordered-List'>
                    <li>
                        Home
                    </li>
                    <li>
                        Recipes
                    </li>
                    <li>
                        Suprise Me
                    </li>
                    <li>
                        About
                    </li>
                </ul>
            </nav>
            <div className='Nav-Button-Container'>
                <button className='Register'>
                    Join Free
                </button>
                <button className='Login'>
                    Login
                </button>
            </div>
        </div>
        <nav className={`Hamburger-Menu${hidden ? 'clicked' : ''}`}>
        <OutsideClickHandler onOutsideClick={() => {
            setHidden(false);
            }}>
            <button className='Hamburger-Button' onClick={close} type='button'>
            {hidden ? '' : ''}
                <div className={`Hamburger-icon1${hidden ? 'animate': ''}`}>   
                </div>
                <div className={`Hamburger-icon2${hidden ? 'animate': ''}`}>         
                </div>
                <div className={`Hamburger-icon3${hidden ? 'animate': ''}`}>         
                </div>
            </button>
        </OutsideClickHandler>
        </nav>
        </>
    );
}

export default Nav;