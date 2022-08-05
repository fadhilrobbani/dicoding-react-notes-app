import React from 'react';
import NoteInput from './NoteInput';
import NotesListActive from './NotesListActive';
import NotesListArchive from './NotesListArchive';

function NoteBody({
  notes,
  onDelete,
  onArchive,
  addNote,
  searchKeyword,
  setShowTrue,
  setShowFalse,
  showStatus,
}) {
  return (
    <main className='note-app__body'>
      <button className='add-button' onClick={setShowTrue}>
        Tambahkan Catatan
      </button>
      <NoteInput
        addNote={addNote}
        setShowFalse={setShowFalse}
        showStatus={showStatus}
      />
      <NotesListActive
        notes={notes}
        onDelete={onDelete}
        onArchive={onArchive}
        searchKeyword={searchKeyword}
      />
      <NotesListArchive
        notes={notes}
        onDelete={onDelete}
        onArchive={onArchive}
        searchKeyword={searchKeyword}
      />
    </main>
  );
}

export default NoteBody;
