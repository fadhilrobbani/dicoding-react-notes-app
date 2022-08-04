import React from 'react';
import NoteInput from './NoteInput';
import NotesListActive from './NotesListActive';
import NotesListArchive from './NotesListArchive';

function NoteBody({ notes, onDelete, onArchive, addNote }) {
  return (
    <main className='note-app__body'>
      <NoteInput addNote={addNote} />
      <NotesListActive
        notes={notes}
        onDelete={onDelete}
        onArchive={onArchive}
      />
      <NotesListArchive
        notes={notes}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </main>
  );
}

export default NoteBody;
