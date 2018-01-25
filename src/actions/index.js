import axios                  from 'axios';
import { FETCH_BOOKS }        from './types';
import { FETCH_BOOKS_ERROR }  from './types';

export function selectBook(book) {
  return {
      type: 'BOOK_SELECTED',
      payload: book
  }
}

export function fetchBooks() {
  const request = axios.get('http://localhost:3000/books');

  return dispatch => {
    request.then(response => {
      dispatch({
        type: FETCH_BOOKS,
        payload: response.data
      });
    }).catch(err => {
      dispatch({
        type: FETCH_BOOKS_ERROR,
        payload: err
      });
    })
  };
}
