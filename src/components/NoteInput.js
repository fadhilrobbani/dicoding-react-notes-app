import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      createdAt: '',
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
        createdAt: new Date().toISOString(),
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.setState(() => {
      return {
        createdAt: new Date().toISOString(),
      };
    });
    console.log(this.state);
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section>
        <h2>Buat Catatan</h2>
        <form className='note-input' onSubmit={this.onSubmitHandler}>
          <input
            type='text'
            id='title'
            onChange={this.onTitleChangeHandler}
            placeholder='Judul'
            required
          />
          <textarea
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
            placeholder='Isi Catatan'
            required
          />
          <button type='submit'>Tambahkan Catatan</button>
        </form>
      </section>
    );
  }
}

export default NoteInput;
