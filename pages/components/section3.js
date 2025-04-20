import { useState } from 'react';

export default function TodoList() {
  // State for storing the list of todo items
  const [todos, setTodos] = useState([]);
  // State for tracking the new todo input value
  const [newTodo, setNewTodo] = useState('');

  // Function to add a new todo item
  const handleAddTodo = () => {
    // Only add non-empty todos
    if (newTodo.trim() !== '') {
      // Add new todo to the array while keeping existing todos
      setTodos([...todos, newTodo]);
      // Clear the input field after adding
      setNewTodo('');
    }
  };

  // Function to remove a todo item by its index
  const handleRemoveTodo = (index) => {
    // Filter out the todo at the specified index
    const updatedTodos = todos.filter((_, i) => i !== index);
    // Update the todos state with the filtered array
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      {/* Todo list header */}
      <h1 className="todo-header">Todo List</h1>
      
      {/* Input section for new todos */}
      <div className="todo-input">
        <input
          type="text"
          className="todo-input-field"
          value={newTodo}  // Controlled input
          onChange={(e) => setNewTodo(e.target.value)}  // Update state on change
          placeholder="Enter a new task"
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}  // Add on Enter key
        />
        <button 
          className="add-todo-button" 
          onClick={handleAddTodo}
          disabled={!newTodo.trim()}  // Disable when empty
        >
          Add
        </button>
      </div>

      {/* Conditional rendering based on whether there are todos */}
      {todos.length === 0 ? (
        // Display when no todos exist
        <p className="empty-message">No tasks yet. Add one above!</p>
      ) : (
        // Display the list of todos
        <ul className="todo-items">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              {/* Todo text */}
              <span className="todo-text">{todo}</span>
              {/* Remove button for each todo */}
              <button 
                className="remove-todo-button"
                onClick={() => handleRemoveTodo(index)}
                aria-label={`Remove ${todo}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}