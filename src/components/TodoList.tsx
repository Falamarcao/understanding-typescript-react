import { ListItem } from "../models/ListItem";

interface TodoListProps {
  items: ListItem[];
}

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
