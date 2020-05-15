import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

// const App: React.ClassicComponent = () => {
const App: React.FC = () => {
  // const todos = [{id: 't1', text: 'Finish the course'}];
  const [todos, setTodos] = useState<Todo[]>([]);


  const todoAddHandler = (text: string) => {
    // console.log(text);
    // setTodos([...todos, { id: Math.random().toString(), text: text }]);
    setTodos((prevTodos) => [
      ...prevTodos, 
      { id: Math.random().toString(), text: text }
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };

  return (
    <div className="App">
      <NewTodo sendText={todoAddHandler}/>
      <TodoList items={todos} onDelete={todoDeleteHandler}/>
    </div>
  );
}

export default App;
