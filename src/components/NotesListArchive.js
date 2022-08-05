import React from 'react';
import NoteItem from './NoteItem';

function NotesListArchive({ notes, onDelete, onArchive, searchKeyword }) {
  const filteredNotes = notes.filter(
    (note) =>
      note.archived &&
      note.title.toLowerCase().replace(/\s+/g, '').includes(searchKeyword)
  );

  const archivedNotes =
    filteredNotes.length > 0 ? (
      <div className='notes-list'>
        {filteredNotes.map((note) => (
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
        ))}
      </div>
    ) : (
      <h3 className='notes-list__empty-message'>Arsip Kosong</h3>
    );

  return (
    <div>
      <h2 className='section-title'>Arsip</h2>
      {archivedNotes}
    </div>
  );
}

export default NotesListArchive;
