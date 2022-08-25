import React, { useState, useEffect } from 'react';

import Search from '../Search/Search';
function Home(props) {
    return (
        <div className='home__main-container'>
            <Search />
            <h1>This Weeks Top Recipes</h1>
        </div>
    );
}

export default Home;