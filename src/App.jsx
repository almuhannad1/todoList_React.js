import TodoList from "./components/TodoList";
import "./App.css";
function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "98vh",
        // direction: "rtl"
      }}
    >
      <TodoList />
    </div>
  );
}

export default App;
