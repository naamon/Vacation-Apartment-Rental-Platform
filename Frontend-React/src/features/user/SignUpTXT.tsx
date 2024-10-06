import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from "react-router-dom";
import { Tab } from '@mui/material';
import SignIn from './LoginTXT'
import User from '../../models/User';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../services/user';
import { AppDispatch, RootState } from '../../app/store';
import { addNewUser1 } from './userSlice';
import { HomePage } from '../../Components/HomePage';
import { current } from '@reduxjs/toolkit';

const theme = createTheme();

export default function SignUp(props:any) {
  const dispatch: AppDispatch = useDispatch();
      const navigate=useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newUser: User = {
      id: 0, password: (data.get('password')?.toString()),
      firstName: (data.get('firstName')?.toString()),
      lastName: (data.get('lastName')?.toString()),
      phoneNumber: (data.get('phone')?.toString()),
      mail: (data.get('email')?.toString()),
      status: Number(data.get('status'))
    };

    dispatch(addNewUser1(newUser));
    props.handleClose()
    navigate("/profile")


    //  currentUser(newUser);
    //  addUser(newUser)//add to data base
    // useDispatch(addUser(newUser))


    //לקרוא לפונקציה אד יוזר ולהוסיף את המשתנה
  };

  const CurrentUser = useSelector((state: RootState) => state.user.currentUser);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', backgroundColor: 'darkcyan' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone number"
                  label="phone number"
                  name="phone"
                  autoComplete="phone number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox name="status" value={1} color="primary" />}
                  label="I want to rent my apartment"
                />
              </Grid>
            </Grid>
            <Button id="ButtonSign"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            // onClick={}
            >
              let's start
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}