import { useState, useId } from 'react';

import _uniqueId from 'lodash/uniqueId';

import TodoList from './components/TodoList';
import { ListItem } from './models/ListItem';
import NewTodo from './components/NewTodo';

function App() {
  const [items, setItems] = useState<ListItem[]>([]);

  const addHandler = (text: string) =>
    setItems((prevItems) => [
      ...prevItems,
      { id: _uniqueId('todo-'), text: text },
    ]);

  return (
    <div className="App">
      <NewTodo onAdd={addHandler} />
      <TodoList items={items} />
    </div>
  );
}

export default App;
