import React from 'react';
import NoteItem from './NoteItem';

function NotesListActive({ notes, onDelete, onArchive }) {
  const activeNotes = notes.map((note) =>
    !note.archived && notes.length > 0 ? (
      <NoteItem
        key={note.id}
        id={note.id}
        title={note.title}
        date={note.createdAt}
        body={note.body}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    ) : null
  );

  return (
    <div>
      <h2>Catatan Aktif</h2>
      <div className='notes-list'>
        {activeNotes !== null ? (
          activeNotes
        ) : (
          <h2 className='note-list__empty-message'>Tidak Ada Catatan Aktif</h2>
        )}
      </div>
    </div>
  );
}

export default NotesListActive;
