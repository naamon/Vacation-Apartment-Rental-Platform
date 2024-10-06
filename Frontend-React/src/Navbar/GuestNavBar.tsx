import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { NavLink, useNavigate } from "react-router-dom";
import { Tab } from '@mui/material';
import { Tabs } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoodIcon from '@mui/icons-material/Mood';
import { Link } from 'react-router-dom';
import { Login } from '../features/user/Login'
import { SignUpAlert } from '../features/user/SignUpAlert';
import logo from '../pictures/logo.png'
import zIndex from '@mui/material/styles/zIndex';
import Profile from '../features/user/Profile';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import houseLogo from '../pictures/houseLogo.png'
import ReactDOM from 'react-dom';
import { createSvgIcon } from '@mui/material/utils';

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'Home',
);


export default function GuestNavBar(props: any) {
  const [auth, setAuth] = React.useState(true);
  const CurrentUser = useSelector((state: RootState) => state.user.currentUser);

  const navigate = useNavigate()
  const handleProfile=()=>{
    if(CurrentUser.password!=""){
      navigate('/profile')
    }
    else{
     alert('Hi guest, please log in')
    }

  }
 
  
  // const openHome = () => {
  //   ReactDOM.render(<HomePage />, document.getElementById('root'));
  // }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>

        <AppBar position="static" id="navbar" >

          <div >

            <IconButton id="profileButton"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleProfile}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Tab icon={<SignUpAlert />} className={"navlink"} />
            <Tab icon={<Login></Login>} className={"navlink"} />
            <NavLink to="/" className={"navlink"}>{<img src={logo} id="logo" alt='Image' onClick={() => props.setShowSlide(true)} />}</NavLink>
            <button style={{backgroundColor:"transparent",color:"transparent"}}>mi</button>
            
            <NavLink to="/homepage" className={"navlink"} style={{textDecoration:"none" }}>{<HomeIcon/>}   APARTMENTS</NavLink>
          </div>
        </AppBar>
      </Box>


    </div>

  );
}