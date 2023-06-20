import React, { useState } from 'react';
import "./searchbar.css"



const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    }
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search...'
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  )
}

export default Searchbar