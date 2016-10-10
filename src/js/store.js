import { applyMiddleware, combineReducers, createStore } from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
// const reducer = function(state, action) {
//   return 'foo';
// }
import reducer from './reducers/index'

//## combineReducers
// const userReducer = (state={}, actions) => {
//   const newStat = {...state};
//   switch(actions.type) {
//     case "CHANGE_USER": {
//       state.name = actions.payload;
//       state = {...state, name: actions.payload}
//       break;
//     }
//     case "CHANGE_AGE": {
//       state = {...state, age: actions.payload}
//       break;
//     }
//   }
//   return state;
// }

// const tweetsReducer = (state=[], actions) => {

//   return state;
// }

// const reducers = combineReducers({
//   user: userReducer,
//   tweets: tweetsReducer,
// })

// const store = createStore(reducers);
//#########################

//### Middleware
// const reducer = (initialState = 0, action) => {
//   if(action.type === 'INC') {
//     return initialState + 1;
//   } else if (action.type === 'DEC') {
//     return initialState - 1;
//   } else if (action.type === 'E') {
//     throw new Error('AAAA!!!!!')
//   }
//   return initialState;
// }

// const logger = (store) => (next) => (action) => {
//   console.log('action fired', action);
//   next(action);
// }

// const error = (store) => (next) => (action) => {
//   try {
//     next(action);
//   } catch(e) {
//     console.log('AHHHH!', e);
//   }
// }

// const middleware = applyMiddleware(logger, error);

// const store = createStore(reducer, 1, middleware);

// store.subscribe(() => {
//   console.log('store changed', store.getState());
// })
// #################

// Async Acrions


// const initialState = {
//   fetching: false,
//   fetched: false,
//   users: [],
//   error: null,
// }

// const reducer = (state=initialState, action) => {
//   switch (action.type){
//     case 'FETCH_USER_START': {
//       return {...state, fetching: true}
//       break;
//     }
//     case 'ERROR': {
//       return {...state, fetching: false, error: action.payload}
//       break;
//     }
//     case 'RECIEVE_USERS_FULFILLED': {
//       return {
//         ...state,
//         fetching: false,
//         fetched: true,
//         users: action.payload.data}
//       break;
//     }
//   }
//   return state
// }

const middleware = applyMiddleware(thunk, logger(), promise())
const store = createStore(reducer, middleware)

// store.dispatch({type: "DEC", payload: 'Will'})
// store.dispatch({
//   type: 'RECIEVE_USERS',
//   payload: axios.get('http://polar-mountain-1741.herokuapp.com/api/blogs')
// })

export default store
// use redux-promise upon insted of below snippet

// store.dispatch((dispatch) => {
//   dispatch({type: 'FETCH_USER_START'})
//   axios.get('http://polar-mountain-1741.herokuapp.com/api/blogs')
//     .then((response) => {
//       console.log(response);
//       dispatch({type: 'RECIEVE_USERS', payload: response.data})
//     })
//     .catch((err) =>{
//       dispatch({type: 'ERROR', payload: err})
//     })
//   dispatch({type: 'BAR'})
// })
// store.dispatch({type: "CHANGE_AGE", payload: 36})