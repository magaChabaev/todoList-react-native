const select = (tasks, filter) => {
  if (filter === 'all') return tasks;
  else if (filter === 'done') return tasks.filter(el => el.completed);
  else if (filter === 'notDone') return tasks.filter(el => !el.completed);
};

export default select;
