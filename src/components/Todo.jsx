/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

//icon
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

//css
import "../App.css";

//Other
import { useContext } from "react";
import { TodosContext } from "../contexts/todosContext";
import { ToastContext } from "../contexts/ToastContext";

// eslint-disable-next-line react/prop-types
function Todo({ todo, showDelete, showUpdate }) {
  const { todos, setTodos } = useContext(TodosContext);
  const { showHideToast } = useContext(ToastContext)

  //Event Handlers
  function handleCheckBtnClicked() {
    const updatedTodos = todos.map((t) => {
      if (t.id == todo.id) {
        t.isCompleted = !t.isCompleted
      }
      return t
    })
    setTodos(updatedTodos);
    // save check items in local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
    // === save check items in local storage ===
    showHideToast("Modified successfully. ")
  }

  function handleDeleteClick() {
    showDelete(todo)
  }

  function handleUpdateClick() {
    showUpdate(todo)
  }

  // === Event Handlers ===

  return (
    <>

      <Card
        className="todoCard"
        sx={{
          minWidth: 275,
          background: "#283593",
          color: "white",
          marginTop: 3,
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h5" sx={{ textAlign: "left", textDecoration: todo.isCompleted ? "line-through" : "none" }}>
                {todo.title}
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "left" }}>
                {todo.details}
              </Typography>
            </Grid>
            {/* Action Btn */}
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >

              {/* Check Btn  */}
              <IconButton
                onClick={() => {
                  handleCheckBtnClicked()
                }}
                className="iconButton"
                aria-label="check"
                style={{
                  color: todo.isCompleted ? "white" : "#8bc34a",
                  background: todo.isCompleted ? "#8bc34a" : "white",
                  border: "solid #8bc34a 3px",
                }}
              >
                <CheckIcon />
              </IconButton>
              {/* === Check Btn === */}

              {/* Update Btn */}
              <IconButton
                onClick={handleUpdateClick}
                className="iconButton"
                aria-label="edit"
                style={{
                  color: "#4477CE",
                  background: "white",
                  border: "solid #4477CE 3px",
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
              {/* === Update Btn === */}

              {/* Delete Btn */}
              <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  color: "#EA1179",
                  background: "white",
                  border: "solid #EA1179 3px",
                }}
                onClick={handleDeleteClick}
              >
                <DeleteIcon />
              </IconButton>
              {/* === Delete Btn === */}

            </Grid>
            {/* == Action Btn == */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default Todo;
