import React from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

function App() {
  const items = [{ id: 't1', text: ' Finish the course' }];

  return (
    <div className="App">
      <NewTodo />
      <TodoList items={items} />
    </div>
  );
}

export default App;
