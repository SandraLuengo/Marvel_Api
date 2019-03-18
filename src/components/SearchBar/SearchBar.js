import React from 'react';
import './SearchBar.scss';

const SearchBar = props =>{
    return(
        <div className='searchBarContainer'>
            <input type='text' name='search' onChange={e=>props.changeFuncion(e)}></input>
            <img src='./image/search.svg' alt='search-icon'/>
        </div>
    );

}

export default SearchBar;