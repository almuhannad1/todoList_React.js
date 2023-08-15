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
import { useContext, useState } from "react";
import { TodosContext } from "../contexts/todosContext";

//Dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

// eslint-disable-next-line react/prop-types
function Todo({ todo }) {
  const { todos, setTodos } = useContext(TodosContext);
  const [showDeleteDialog, setshowDeleteDialog] = useState(false);

  //Event Handlers
  function handleCheckBtnClicked() {
    const updatedTodos = todos.map((t) => {
      if (t.id == todo.id) {
        t.isCompleted = !t.isCompleted
      }
      return t
    })
    setTodos(updatedTodos)
  }

  function handleDeleteClick() {
    setshowDeleteDialog(true)
  }

  function handleClose() {
    setshowDeleteDialog(false)
  }

  function handleDeleteConfirm() {
    const updatedTodos = todos.filter((t) => {
      return t.id != todo.id
    })
    setTodos(updatedTodos)
  }
  // === Event Handlers ===

  return (
    <>
      {/* Delete Dialog */}
      <Dialog
        onClose={handleClose}
        open={showDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" variant="h5" fontFamily={"TitilliumWeb"} fontWeight={"bold"} color={"black"}>
          {"Are you sure to delete this task?!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" variant="h6" fontFamily={"TitilliumWeb"} fontWeight={600} color={"black"}>
            You cannot undo deleting a task after it has been completed.
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose}>Close</Button>
          <Button autoFocus onClick={handleDeleteConfirm}>
            Yes, Delete a task
          </Button>
        </DialogActions>
      </Dialog>
      {/* === Delete Dialog === */}

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
              <Typography variant="h5" sx={{ textAlign: "left" }}>
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

              <IconButton
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
