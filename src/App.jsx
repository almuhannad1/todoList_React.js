import TodoList from "./components/TodoList";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { TodosContext } from "./contexts/TodosContext";
import { useState } from "react";

// Others
import { v4 as uuidv4 } from "uuid";


function App() {
  const initialTodos = [
    {
      id: uuidv4(),
      title: "Read a book",
      details: "ldsldfsdfdsfss",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: "Write a code",
      details: "thyyy",
      isCompleted: false,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const theme = createTheme({
    typography: {
      fontFamily: ["TitilliumWeb"],
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "98vh",
          // direction: "rtl"
        }}
      >
        <TodosContext.Provider value={{ todos, setTodos }}>
          <TodoList />
        </TodosContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
