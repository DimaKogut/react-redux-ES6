import axios from 'axios';

export function fetchUser() {
  return {
    type: "RECIEVE_USERS",
    payload: axios.get('http://polar-mountain-1741.herokuapp.com/api/blogs')
  }
}