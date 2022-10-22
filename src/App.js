
import React from 'react';
import './style/App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch ';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButtom } from './CreateTodoButtom';

const todos = [
  { text: "hacer uno", completed: false },
  { text: "hacer dos", completed: false },
  { text: "hacer tres", completed: false },
  { text: "hacer cuatro", completed: false },
  { text: "hacer cinco", completed: false },
  { text: "hacer seis", completed: false }
]

function App() {
  return (
    //<React.Fragment>
    <div className='background'>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
          
        ))}
      </TodoList>
      <CreateTodoButtom />
    </div>
    //</React.Fragment>
  );
}

export default App;
