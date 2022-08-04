import React from 'react';
import NoteItem from './NoteItem';

function NotesListArchive({ notes, onDelete, onArchive }) {
  const filteredNotes = notes.filter(
    (note) => note.archived && notes.length > 0
  );

  const archivedNotes =
    filteredNotes.length > 0 ? (
      filteredNotes.map((note) => (
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
      ))
    ) : (
      <p className='notes-list__empty-message'>Arsip Kosong</p>
    );

  return (
    <div>
      <h2>Catatan Aktif</h2>
      <div className='notes-list'>{archivedNotes}</div>
    </div>
  );
}

export default NotesListArchive;
