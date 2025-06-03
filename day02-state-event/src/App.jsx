import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Học React",
      priority: "High",
      completed: false
    },
    {
      id: 2,
      title: "Làm bài tập",
      priority: "Medium",
      completed: true
    }
  ]);

  const handleAdd = (newTodo) => {
    setTodos([...todos, { ...newTodo, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList 
        todos={todos} 
        onDelete={handleDelete} 
        onToggle={handleToggle} 
      />
    </div>
  );
}

export default App;
