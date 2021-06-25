import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Collapse, createMuiTheme, ThemeProvider } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    primary: "red",
  },
  paper: {
    marginTop: theme.spacing(18),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#FE6760",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#FE6760",
    color: "white",
    "&:hover": {
      backgroundColor: "lightgry",
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [alert, revealAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };

    const editedUser = Object.assign(user, updatedField);

    setUser(editedUser);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios
      .post("/api/signin", user)
      .then((res) => {
        const secss = res.data;

        if (secss) {
          setSuccessMsg("Success login in  ");
          localStorage.setItem("user-info", JSON.parse(secss));
          setSuccess(true);
        }
      })
      .catch((error) => {
        const err = error.response.data.errors;
        if (err) {
          revealAlert(true);
          setErrMsg(err.email || err.password);
        }
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <ThemeProvider theme={theme}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              onChange={handleChange}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              label="Passphrase"
              onChange={handleChange}
              id="password"
              autoComplete="current-password"
            />
          </ThemeProvider>
          <Collapse in={success}>
            <Alert severity="success">{successMsg}</Alert>
          </Collapse>
          <Collapse in={alert}>
            <Alert severity="error">{errMsg}</Alert>
          </Collapse>
          <FormControlLabel
            control={<Checkbox id="remember" style={{ color: "black" }} />}
            label="Remember me"
          />
          {/* {primary} */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            // color="rgba(121,9,113,1)"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="space-between">
            <Grid item>
              <Link
                href="/forgot-password"
                variant="body2"
                style={{ color: "black" }}
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2" style={{ color: "black" }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
};

export default Login;
