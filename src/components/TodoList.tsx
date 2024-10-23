import { ListItem } from "../models/ListItem";

interface TodoListProps {
  items: ListItem[];
  onDelete: (id: string) => void;
}

const TodoList = (props: TodoListProps) => {
  return (
    <ul>
      {props.items.map((item: ListItem) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={props.onDelete.bind(null, item.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
