import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// Components
import Todo from "./Todo";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//Other
import { useContext, useState, useEffect, useMemo } from "react";
import { TodosContext } from "../contexts/todosContext";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType, setDisplayedTodosType] = useState("all")

  //filteration arrays
  const completedTodos = useMemo(() => {
    return todos.filter((t) => {
      return t.isCompleted
    })
  }, [todos])

  const notCompletedTodos = useMemo(() => {
    return todos.filter((t) => {
      return !t.isCompleted
    })
  }, [todos])

  let todosToBeRendered = todos

  if (displayedTodosType == "completed") {
    todosToBeRendered = completedTodos
  } else if (displayedTodosType == "non-completed") {
    todosToBeRendered = notCompletedTodos
  } else {
    todosToBeRendered = todos
  }

  const todosJsx = todosToBeRendered.map((t) => {
    return <Todo key={t.id} todo={t} />;
  });

  // === filteration arrays ===

  function handleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };

    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos);

    // save a items in local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
    // === save a items in local storage ===

    setTitleInput("")
  }

  // get a items in local storage
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
    setTodos(storageTodos)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // === get a items in local storage ===

  function changeDisplayedType(e) {
    setDisplayedTodosType(e.target.value)
  }


  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }} style={{ maxHeight: "80vh", overflow: "scroll" }}>
        <CardContent>
          <Typography
            variant="h3"
            style={{ textAlign: "center", fontWeight: 600 }}
            gutterBottom
          >
            My Tasks
          </Typography>
          <Divider />

          {/* Filter But */}
          <ToggleButtonGroup
            value={displayedTodosType}
            exclusive
            onChange={changeDisplayedType}
            aria-label="text alignment"
            style={{ margin: "10px 36%" }}
            color="primary"
          >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="completed">Done</ToggleButton>
            <ToggleButton value="non-completed">Not</ToggleButton>
          </ToggleButtonGroup>
          {/* == Filter But == */}

          {/* All Todos */}
          {todosJsx}
          {/* == All Todos == */}

          {/* INPUT + ADD BUTTON */}
          <Grid container style={{ marginTop: "20px" }} spacing={2}>
            <Grid
              item
              xs={8}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <TextField
                id="outlined-basic"
                label="Task title"
                variant="outlined"
                style={{ width: "100%" }}
                value={titleInput}
                onChange={(e) => {
                  setTitleInput(e.target.value)
                }}
              />
            </Grid>

            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Button
                style={{ width: "100%", height: "100%" }}
                variant="contained"
                onClick={() => {
                  handleAddClick()
                }}
                disabled={titleInput.length == 0}
              >
                ADD
              </Button>
            </Grid>
          </Grid>
          {/* == INPUT + ADD BUTTON == */}
        </CardContent>
      </Card>
    </Container>
  );
}

export default TodoList;
