import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL,
} from './constants.js'

export const setSearchField = (text) => {
  // console.log(text);
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}
/* this is a higher order function */ 
// a function that can return a function
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
  .catch( (error) => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: error}))
} 