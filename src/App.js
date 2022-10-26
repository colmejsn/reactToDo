
import React from 'react';
import './style/App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch ';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButtom } from './CreateTodoButtom';

function useLocalStorage(itemName, initialValue) {
  // Guardamos nuestro item en una constante
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  
  // ¡Podemos utilizar otros hooks!
  const [item, setItem] = React.useState(parsedItem);

  // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  // Regresamos los datos que necesitamos
  return [
    item,
    saveItem,
  ];
}





function App() {

  const [toDoo, saveTodos] = useLocalStorage('TODO_V1',[]);
  const [buscarV, setBuscar] = React.useState('');
  const completadosDo = toDoo.filter(toDoo => !!toDoo.completed).length;
  const totaltoDo = toDoo.length;

  const ToDooEncontrados = query => {
    return toDoo.filter((el) =>
      el.text.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }
  const tododisplay = buscarV.length < 1 ? toDoo : ToDooEncontrados(buscarV);

  const modifTodo = (text, borra) => {
    const todoIndex = toDoo.findIndex(todo => todo.text === text);
    const newTodos = [...toDoo];
    borra ? (newTodos.splice(todoIndex, 1)) : (newTodos[todoIndex].completed = true);
    saveTodos(newTodos);
  };

  return (
    //<React.Fragment>
    <div className='background'>
      <TodoCounter
        total={totaltoDo}
        completados={completadosDo}
      />
      <TodoSearch
        buscarV={buscarV}
        setBuscar={setBuscar}
      />
      <TodoList>
        {tododisplay.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo}
            oncomplete={() => modifTodo(todo.text, false)}
            ondelete={() => modifTodo(todo.text, true)}

          />

        ))}
      </TodoList>
      <CreateTodoButtom />
    </div>
    //</React.Fragment>
  );
}

export default App;
