import TodoList from "./components/TodoList";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";



function App() {
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
          <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
