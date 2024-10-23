import { TodoListProps, ListItem } from './interfaces';

const TodoList = (props: TodoListProps) => {
  return (
    <ul>
      {props.items.map((item: ListItem) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
