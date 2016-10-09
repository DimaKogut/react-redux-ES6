import { applyMiddleware, combineReducers, createStore } from 'redux';

// const reducer = function(state, action) {
//   return 'foo';
// }


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

const reducer = (initialState = 0, action) => {
  if(action.type === 'INC') {
    return initialState + 1;
  } else if (action.type === 'DEC') {
    return initialState - 1;
  } else if (action.type === 'E') {
    throw new Error('AAAA!!!!!')
  }
  return initialState;
}

const logger = (store) => (next) => (action) => {
  console.log('action fired', action);
  next(action);
}

const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch(e) {
    console.log('AHHHH!', e);
  }
}

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, 1, middleware);

store.subscribe(() => {
  console.log('store changed', store.getState());
})

store.dispatch({type: "DEC", payload: 'Will'})
store.dispatch({type: "E", payload: 35})
// store.dispatch({type: "CHANGE_AGE", payload: 36})