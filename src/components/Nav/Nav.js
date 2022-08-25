import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Icons/SunnyLogo.png';
import OutsideClickHandler from 'react-outside-click-handler';

function Nav(props) {

const [hidden, setHidden] = useState(false);

const close = () => {
    setHidden(!hidden);
}

    return (
			<>
				<div className='Nav-Component-Container'>
					<Link to='/'><img src={Logo} alt='Logo' className='Logo' /></Link>
					<nav className='Nav-Container'>
						<ul className='Nav-Unordered-List'>
							<Link to='/' className='Nav-Links'>
								Home
							</Link>
							<Link to='/recipes' className='Nav-Links'>
								Recipes
							</Link>
							<Link to='/surprise_me' className='Nav-Links'>
								Suprise Me
							</Link>
							<Link to='/about' className='Nav-Links'>
								About
							</Link>
						</ul>
					</nav>
					<nav className={`Hamburger-Menu${hidden ? 'clicked' : ''}`}>
						<OutsideClickHandler
							onOutsideClick={() => {
								setHidden(false);
							}}>
							<button
								className='Hamburger-Button'
								onClick={close}
								type='button'>
								{hidden ? '' : ''}
								<div
									className={`Hamburger-icon1${hidden ? 'animate' : ''}`}></div>
								<div
									className={`Hamburger-icon2${hidden ? 'animate' : ''}`}></div>
								<div
									className={`Hamburger-icon3${hidden ? 'animate' : ''}`}></div>
							</button>
						</OutsideClickHandler>
					</nav>
					<div className='Nav-Button-Container'>
						<Link to='/register' className='Register'>
							Join Free
						</Link>
						<Link to='/login' className='Login'>
							Login
						</Link>
					</div>
				</div>
			</>
		);
}

export default Nav;