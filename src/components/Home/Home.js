import React, { useState, useEffect } from 'react';

import Search from '../Search/Search';
function Home(props) {
    return (
        <div className='home__main-container'>
            <Search />
        </div>
    );
}

export default Home;