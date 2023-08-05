import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function TodoList() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            variant="h5"
            style={{ textAlign: "center" }}
            color="text.secondary"
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
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default TodoList;
