import React from 'react';
import { getInitialData } from '../utils';
import NavigationBar from './NavigationBar';
import NoteBody from './NoteBody';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchKeyword: '',
      showStatus: false,
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchKeywordHandler = this.onSearchKeywordHandler.bind(this);
    this.onSetShowTrue = this.onSetShowTrue.bind(this);
    this.onSetShowFalse = this.onSetShowFalse.bind(this);
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

  onSearchKeywordHandler(keyword) {
    const filteredKeyword = keyword.toLowerCase().replace(/\s+/g, '');
    this.setState({ searchKeyword: filteredKeyword });
  }

  onSetShowTrue() {
    this.setState({ showStatus: true });
  }

  onSetShowFalse() {
    this.setState({ showStatus: false });
  }

  render() {
    return (
      <>
        <NavigationBar
          searchKeyword={this.onSearchKeywordHandler}
          setShowTrue={this.onSetShowTrue}
        />
        <NoteBody
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          addNote={this.onAddNoteHandler}
          searchKeyword={this.state.searchKeyword}
          setShowTrue={this.onSetShowTrue}
          setShowFalse={this.onSetShowFalse}
          showStatus={this.state.showStatus}
        />
      </>
    );
  }
}

export default App;
