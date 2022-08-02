import React from 'react';
import NoteItem from './NoteItem';

function NotesListArchive({ notes, onDelete, onArchive }) {
  return (
    <div>
      <h2>Arsip</h2>
      <div className='notes-list'>
        {notes.map((note) =>
          note.archived && notes.length > 0 ? (
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
            <h2 className='note-list__empty-message'>Arsip Kosong</h2>
          )
        )}
      </div>
    </div>
  );
}

export default NotesListArchive;
