import React from 'react';
import { getInitialData } from '../utils';
import NavigationBar from './NavigationBar';
import NotesList from './NotesList';
import NoteInput from './NoteInput';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
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
            createdAt,
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

  //jadi disini kita punya data keyword dr state searhinput, jd kita return dan render data tersebut terhadap
  //state di kelas ini yang punya akses data
  onSearchNoteHandler({ keyword }) {
    const searchKeyword = keyword.toLowerCase().replace(/\s+/g, '');
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.includes(searchKeyword)
    );

    this.setState(() => {
      return {
        notes: filteredNotes,
      };
    });
  }

  render() {
    return (
      <>
        <NavigationBar searchNote={this.onSearchNoteHandler} />
        <main>
          <NoteInput addNote={this.onAddNoteHandler} />
          <NotesList
            notes={this.state.notes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </main>
      </>
    );
  }
}

export default App;
