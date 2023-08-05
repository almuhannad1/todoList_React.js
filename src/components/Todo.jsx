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

function Todo() {
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
              <Typography variant="h5" sx={{ textAlign: "left" }}>
                Task 1
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "left" }}>
                Details about the task num 1
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
              <IconButton
                className="iconButton"
                aria-label="check"
                style={{
                  color: "#8bc34a",
                  background: "white",
                  border: "solid #8bc34a 3px",
                }}
              >
                <CheckIcon />
              </IconButton>
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
              <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  color: "#EA1179",
                  background: "white",
                  border: "solid #EA1179 3px",
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
            {/* == Action Btn == */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default Todo;
