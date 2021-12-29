import {createStore, combineReducers} from 'redux';
import todosReducer from './tasksReducer';
import filterReducer from './filterReducer';

const reducers = combineReducers({
  tasks: todosReducer,
  filter: filterReducer,
});

const store = createStore(reducers);

export default store;
