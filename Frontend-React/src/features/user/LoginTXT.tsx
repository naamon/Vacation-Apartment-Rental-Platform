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
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import User from '../../models/User';
import { updateUser } from './userSlice';
import  Profile  from './Profile';
import { Navigate, useNavigate} from 'react-router-dom';
import { Login } from './Login';


const theme = createTheme();

export default function SignIn(props:any) { 
  const Users = useSelector((state: RootState) => state.user.users);
  const CurrentUser = useSelector((state: RootState) => state.user.currentUser);
  const dispatch:AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  //check if there is user like that
    for(var i=0;i<Users.length;i++){
        if(Users[i].mail===data.get('email')?.toString()){
            if(Users[i].password==data.get('password')?.toString()){
               dispatch(updateUser(Users[i]));
               props.handleClose()
               navigate("/profile")
               break;
              }
            else{
              alert('The password is wrong')
              break;
            }
        }
    } 
    if(i==Users.length)
      alert('This mail has no account, please sign up')
    }
  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main',backgroundColor:'darkcyan' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button id="ButtonSign"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            Login            </Button>
            <Grid container>
              
              <Grid item>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}