import React from 'react';
import { getInitialData, showFormattedDate } from '../utils';
import NavigationBar from './NavigationBar';
import NoteBody from './NoteBody';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData().map((note) =>
        Object.assign(note, { createdAt: showFormattedDate(note.createdAt) })
      ),
      searchKeyword: '',
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
  }

  onAddNoteHandler({ title, body, createdAt }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: showFormattedDate(createdAt),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const filteredNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState(() => {
      return {
        notes: filteredNotes,
      };
    });
  }

  onArchiveHandler(id) {
    const findNote = this.state.notes.find((note) => note.id === id);
    this.setState((prevState) => {
      const filteredNotes = prevState.notes.map((prevNote) =>
        prevNote.id === findNote.id
          ? { ...prevNote, archived: prevNote.archived === true ? false : true }
          : prevNote
      );
      return {
        notes: filteredNotes,
      };
    });
  }

  onSearchNoteHandler({ keyword }) {
    const searchKeyword = keyword.toLowerCase().replace(/\s+/g, '');
    console.log(keyword);
  }

  render() {
    return (
      <>
        <NavigationBar searchNote={this.onSearchNoteHandler} />
        <NoteBody
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          addNote={this.onAddNoteHandler}
        />
      </>
    );
  }
}

export default App;
