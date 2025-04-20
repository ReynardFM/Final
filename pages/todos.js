// Import the Nav component for the navigation bar
import Nav from './components/section4';

// Import the TodoList component that displays the list of tasks
import TodoList from "./components/section3";

// Define the Todos page component
export default function Todos() {
  return (
    <div className="page">
      {/* Render the top navigation bar */}
      <Nav />

      {/* Render the to-do list component */}
      <TodoList />
    </div>
  );
}
