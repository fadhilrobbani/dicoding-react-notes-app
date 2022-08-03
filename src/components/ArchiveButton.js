import React from 'react';

function ArchiveButton({ id, onArchive, archived }) {
  const button = () => {
    if (!archived) {
      return (
        <button
          className='note-item__archive-button'
          onClick={() => onArchive(id)}
        >
          Arsipkan
        </button>
      );
    } else {
      return (
        <button
          className='note-item__archive-button'
          onClick={() => onArchive(id)}
        >
          Pindahkan
        </button>
      );
    }
  };

  return button();
}

export default ArchiveButton;
