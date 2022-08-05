import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      createdAt: '',
      charsLeft: 50,
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    if (event.target.value.length <= 50) {
      this.setState(() => {
        return {
          title: event.target.value,
          charsLeft: 50 - event.target.value.length,
        };
      });
    }
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
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section>
        <h2 className='section-title'>Buat Catatan</h2>
        <form className='note-input' onSubmit={this.onSubmitHandler}>
          <p className='note-input__title__char-limit'>
            Sisa Karakter:{this.state.charsLeft}
          </p>
          <input
            value={this.state.title}
            className='note-input__title'
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
          <div className='note-input__button'>
            <button type='submit' className='note-input__submit-button'>
              Tambahkan
            </button>
            <button type='button' className='note-input__cancel-button'>
              Batal
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default NoteInput;
