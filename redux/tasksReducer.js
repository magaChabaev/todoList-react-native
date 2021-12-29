import {COMPLETE_TODO, DELETE_TODO, ADD_TODO} from './tasksAction';

const initialState = [
  {id: 0, text: 'Buy a car', completed: false},
  {id: 1, text: 'Read a book', completed: false},
  {id: 2, text: 'Go to sleep', completed: false},
];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const {id, text} = action.payload;
      return [...state, {id, text, completed: false}];
    }
    case DELETE_TODO: {
      const {id} = action.payload;
      return [...state.filter(item => item.id !== id)];
    }
    case COMPLETE_TODO: {
      const {id} = action.payload;
      return state.map(el => {
        if (el.id === id) {
          return {...el, completed: !el.completed};
        } else return el;
      });
    }
    default:
      return state;
  }
};

export default todosReducer;
