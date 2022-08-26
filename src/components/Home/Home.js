import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Search from '../Search/Search';
import TimerIcon from '../../Icons/timer-icon.png';
function Home(props) {
	const [weeksTop, setWeeksTop] = useState([]);

	useEffect(() => {
		fetch('https://sunnybites-backend.herokuapp.com/api/recipes')
			.then((res) => res.json())
			.then((res) => {
				let shuffledRecipe = res
					.sort(() => Math.random() - Math.random())
					.slice(0, 4);
				console.log(shuffledRecipe);
				setWeeksTop(shuffledRecipe);
			});
	}, []);

	if (!weeksTop.length) {
		return <h2>Loading....</h2>;
	}
	return (
		<div className='home__main-container'>
			<Search />
            <div className='home__week-container'>
            <h1 className='home__header'>This Weeks Top Recipes</h1>
			<ul className='home__unordered-list'>
				{weeksTop.map((recipes) => (
					<li key={recipes._id} className='home__listed-items'>
						<Link to={`/recipes/${recipes._id}`} key={recipes._id} className='home__listed-links'>
							<img src={recipes.image} alt={recipes.title} className='home__list-image' />
                            <h3 className='home__list-header'>{recipes.title}</h3>
							<p>{recipes.description.substring(0, 100)}...</p>
                            <div className='home__card-footer'>
                                <h5 className='home__footer-header'>Learn more...</h5>
                                <div className='home__timer-container'>
                                    <img className='home__timer-icon' src={TimerIcon} alt='timer-icon' />
                                    <h5>{recipes.duration} min</h5>  
                                </div>
                            </div>
 

						</Link>
					</li>
				))}
			</ul> 
            </div>

		</div>
	);
}

export default Home;
