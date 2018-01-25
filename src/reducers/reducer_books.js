import { FETCH_BOOKS }        from '../actions/types';
import { FETCH_BOOKS_ERROR }  from '../actions/types';

export default function(state = [], action) {
  switch(action.type){
  case FETCH_BOOKS:
    return action.payload;
  case FETCH_BOOKS_ERROR:
    console.log(action.payload);
    return action.payload;
  default:
    return state;
  }
}
