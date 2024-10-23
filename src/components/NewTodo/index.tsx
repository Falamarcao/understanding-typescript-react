import { FormEvent, useRef } from 'react';

const NewTodo = () => {
    const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
      event.preventDefault();
      const enteredText = textInputRef.current!.value;
      console.log(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
              <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
