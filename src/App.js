import logo from './logo.svg';
import './App.css';
import { Clock } from './Components/Clock';
import { CustomInput } from './Components/CustomInput';
import { TodoItem } from './Components/TodoItem';
import { Todo } from './Models/Todo';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (inputValue) => {
    if (!inputValue) {
      return;
    }

    let newTask = new Todo();
    newTask.name = inputValue;
    newTask.isDone = false;

    setTodoList(todoList.concat(newTask));
  };

  const toggleDone = (todoIndex) => {
    let mapped = todoList.map((value, index) => {
      return todoIndex === index ? { ...value, isDone: !value.isDone } : { ...value };
    });

    setTodoList(mapped);
  };

  const editTodo = (todoIndex, editedName) => {
    let mapped = todoList.map((value, index) => {
      return todoIndex === index ? { ...value, name: editedName } : { ...value };
    });

    setTodoList(mapped);
  }

  const deleteTodo = (todoIndex) => {
    setTodoList(todoList.filter((value, index) => {
      return index !== todoIndex;
    }));
  };

  return (
    <div className="App">
      <div className='Clock'> <Clock /> </div>

      <h2>
        <img src={logo} alt='logo' className='App-logo' />
        Todo List
      </h2>

      <CustomInput
        placeholder='Add Todo'
        buttonText='+'
        onButtonClick={(inputValue) => { addTodo(inputValue); }} />

      <ul className='List-border'>
        {todoList.map((value, index) => {
          return (
            <TodoItem
              key={index}
              completed={value.isDone}
              taskName={value.name}
              onClick={() => toggleDone(index)}
              onEdit={(editedName) => editTodo(index, editedName)}
              onDelete={() => deleteTodo(index)} />
          );
        })}
      </ul>

    </div>
  );
}

export default App;
