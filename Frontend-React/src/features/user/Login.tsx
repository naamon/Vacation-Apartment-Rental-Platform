

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SignIn from './LoginTXT'
import  UncontrolledExample  from '../../Components/Carusael';


export function Login(props:any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return ( 
    <div>
     
      <Button onClick={handleClickOpen} id="ButtonG">
        Login
      </Button >
      <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        {/* <DialogTitle id="alert-dialog-title">
          {"ברוך שובך"}
        </DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
     {/* אנא הקש שם משתמש וסיסמא על מנת להכנס לחשבונך */}
     <SignIn handleClose={handleClose}></SignIn>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
      {/* {props.setShowSlide(true)} */}
    </div>
  );
}

