import React, { useState, useEffect } from 'react';
import SearchResults from '../SearchResults/SearchResults';

import Background from '../../Icons/home-logo.jpg';
import SearchIcon from '../../Icons/search-icon.png';
function Search(props) {

    const [recipes, setRecipes] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [lastSearch, setLastSearch] = useState('');

    useEffect(() => {

    }, [])
    return (
        <div className='search__main-contaniner'>
            <form className='search__form'>
                <div className='search__label_input'>
                    <label className='search__label'>Recipe Search</label>
                    <input type='text' className='search__input' placeholder='Recipes, Ingredients, Trends' /> 
                </div>
                    <button type='submit' className='search__button'>
                    <img src={SearchIcon} alt='search-icon' className='search__image' />
                    </button>
            </form>
        </div>
    );
}

export default Search;