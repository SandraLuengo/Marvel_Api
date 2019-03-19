import React from 'react';
import './SearchBar.scss';

const SearchBar = ({changeFuncion}) => {
    return(
        <div className='searchBarContainer'>
            <input type='text' name='search' onChange={e=>changeFuncion(e)}></input>
            <img src='./image/search.svg' alt='search-icon'/>
        </div>
    );

}

export default SearchBar;