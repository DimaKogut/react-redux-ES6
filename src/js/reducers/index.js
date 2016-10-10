// const initialState = {
//   users: [],
//   fetching: false,
//   fetched: false,
//   error: null,
// }

export default function reducer(state={
    user: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

// const reducer = (state=initialState, action) => {
    switch (action.type){
      case 'FETCH_USER_START': {
        return {...state, fetching: true}
        break;
      }
      case 'ERROR': {
        return {...state, fetching: false, error: action.payload}
        break;
      }
      case 'RECIEVE_USERS_FULFILLED': {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload.data}
        break;
      }
    }
    return state
}

// export default reducer;