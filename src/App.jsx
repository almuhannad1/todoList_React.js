import TodoList from "./components/TodoList";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { TodosContext } from "./contexts/todosContext";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MySnackBar from "./components/MySnackBar";

import { ToastContext } from "./contexts/ToastContext";

const theme = createTheme({
  typography: {
    fontFamily: ["TitilliumWeb"],
  },

  palette: {
    primary: {
      main: "#ff3d00",
    }
  }
});

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

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("")

  function showHideToast(message) {
    setOpen(true)
    setMessage(message)
    setTimeout(() => {
      setOpen(false)
    }, 2000)
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContext.Provider value={{ showHideToast }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "98vh",
            // direction: "rtl"
          }}
        >
          <MySnackBar open={open} message={message} />
          <TodosContext.Provider value={{ todos, setTodos }}>
            <TodoList />
          </TodosContext.Provider>
        </div>
      </ToastContext.Provider>
    </ThemeProvider>
  );
}

export default App;
