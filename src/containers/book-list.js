import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { fetchBooks } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  componentWillMount() {
      this.props.fetchBooks();
  }

  renderList() {
    if(!this.props.books.map) {
      return (
        <div>
          Não foi possível recupurar os books, tente novamente mais tarde
        </div>
      );
    }
    return this.props.books.map((book) => {
      return (
        <li
          key={book.id}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
          </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook, fetchBooks: fetchBooks}, dispatch);
  // pass on to all the different reducers
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
