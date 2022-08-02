import React from 'react';
import NoteItem from './NoteItem';

function NotesListActive({ notes, onDelete, onArchive }) {
  return (
    <div>
      <h2>Catatan Aktif</h2>
      <div className='notes-list'>
        {notes.map((note) =>
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
          ) : (
            <h2 className='note-list__empty-message'>
              Tidak Ada Catatan yang Aktif
            </h2>
          )
        )}
      </div>
    </div>
  );
}

export default NotesListActive;
