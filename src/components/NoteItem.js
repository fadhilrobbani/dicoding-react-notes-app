import React from 'react';
import { showFormattedDate } from '../utils';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';

function NoteItem({ id, onArchive, onDelete, title, date, body, archived }) {
  return (
    <div className='note-item'>
      <div className='note-item_header'>
        <h3 className='note-item__title'>{title}</h3>
        <p className='note-item__date'>{showFormattedDate(date)}</p>
      </div>
      <p className='note-item__body'>{body}</p>
      <div className='note-item__action'>
        <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NoteItem;
