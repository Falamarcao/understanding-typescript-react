import React from 'react';

import TodoList from './components/TodoList';

function App() {
  const items = [{ id: 't1', text: ' Finish the course' }];

  return (
    <div className="App">
      <TodoList items={items} />
    </div>
  );
}

export default App;
