import React from 'react';
import SearchInput from './SearchInput';

function NavigationBar({ searchKeyword }) {
  return (
    <header className='note-app__header'>
      <h1>Notes</h1>
      <SearchInput searchKeyword={searchKeyword} />
    </header>
  );
}

export default NavigationBar;
