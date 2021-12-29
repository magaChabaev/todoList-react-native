export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_UNCOMPLETED = 'SHOW_UNCOMPLETED';

export const showAll = () => {
  return {
    type: SHOW_ALL,
  };
};

export const showCompleted = () => {
  return {
    type: SHOW_COMPLETED,
  };
};

export const showUncompleted = () => {
  return {
    type: SHOW_UNCOMPLETED,
  };
};
