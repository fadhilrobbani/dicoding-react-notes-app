import React from 'react';
import SearchInput from './SearchInput';

function NavigationBar({ searchNote }) {
  return (
    <header className='note-app__header'>
      <h1>Notes</h1>
      <SearchInput searchNote={searchNote} />
    </header>
  );
}

export default NavigationBar;
