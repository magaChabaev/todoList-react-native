import {SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED} from './filterActions';

const filterReducer = (state = 'all', action) => {
  switch (action.type) {
    case SHOW_ALL:
      return 'all';
    case SHOW_UNCOMPLETED: {
      return 'notDone';
    }
    case SHOW_COMPLETED: {
      return 'done';
    }
    default:
      return state;
  }
};

export default filterReducer;
