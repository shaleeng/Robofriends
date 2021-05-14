import React from 'react';


const SearchBox = ({searchChange}) => {
    return (
        <div className = 'pa2'>
        <input type='search' 
        className='pa2 bg-lightest-blue'
        placeholder='Search robots'
        onChange= {searchChange}/>
        </div>
    );
}

export default SearchBox;