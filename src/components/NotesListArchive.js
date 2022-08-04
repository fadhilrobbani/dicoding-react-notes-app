import React from 'react';
import NoteItem from './NoteItem';

function NotesListArchive({ notes, onDelete, onArchive }) {
  const archiveNotes = notes.map((note) =>
    note.archived && notes.length > 0 ? (
      <NoteItem
        key={note.id}
        id={note.id}
        title={note.title}
        date={note.createdAt}
        body={note.body}
        archived={note.archived}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    ) : null
  );

  console.log(archiveNotes);
  return (
    <div>
      <h2>Arsip</h2>
      <div className='notes-list'>
        {archiveNotes !== null ? (
          archiveNotes
        ) : (
          <h2 className='note-list__empty-message'>Arsip Kosong</h2>
        )}
      </div>
    </div>
  );
}

export default NotesListArchive;
