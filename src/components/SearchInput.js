import React from 'react';

// function SearchInput({ title, onSearch }) {
//   return (
// <div className='note-search'>
//   <form>
//     <input type='text' id='search' onChange={() => onSearch(title)} />
//   </form>
// </div>
//   );
// }

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState(() => {
      return {
        keyword: event.target.value,
      };
    });

    this.props.searchNote(this.state);
  }

  render() {
    return (
      <div className='note-search'>
        <p>{this.state.keyword}</p>
        <input
          type='text'
          value={this.state.keyword}
          id='search'
          onChange={this.onChangeHandler}
          placeholder='Cari Catatan'
        />
      </div>
    );
  }
}

export default SearchInput;
