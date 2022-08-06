import React from 'react';
import SearchInput from './SearchInput';

function NavigationBar({ searchKeyword, setShowTrue }) {
  return (
    <header className='note-app__header'>
      <div className='note-app__header-title'>
        <h1>Notes</h1>
        <button className='add-button' onClick={setShowTrue}>
          Tambahkan Catatan
        </button>
      </div>
      <SearchInput searchKeyword={searchKeyword} />
    </header>
  );
}

export default NavigationBar;
