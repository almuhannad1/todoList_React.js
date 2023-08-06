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

// Others
import { v4 as uuidv4 } from "uuid";

const todos = [
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

function TodoList() {
  const todosJsx = todos.map((t) => {
    return <Todo key={t.id} title={t.title} details={t.details} />;
  });
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
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
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
            style={{ margin: "10px 36%" }}
          >
            <ToggleButton value="left">All</ToggleButton>
            <ToggleButton value="center">Done</ToggleButton>
            <ToggleButton value="right">Not</ToggleButton>
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
