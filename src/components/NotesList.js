import React from 'react';
import NotesListActive from './NotesListActive';
import NotesListArchive from './NotesListArchive';

function NotesList({ notes, onDelete, onArchive }) {
  return (
    <section>
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
    </section>
  );
}

export default NotesList;
