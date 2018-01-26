// master reducer,  does not manage state, container for all pieces of state from child reducers
import { combineReducers } from 'redux';
// import reducers --> must provide at least one
import StudentReducer from './StudentReducer';
// build root reducer
// combineReducers takes 1 arg, an object
const rootReducer = combineReducers({
    // name of state is property (used by react)
    students: StudentReducer,
})
export default rootReducer;


