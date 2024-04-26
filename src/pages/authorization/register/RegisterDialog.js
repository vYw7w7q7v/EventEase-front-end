import React, { useState } from 'react';

// ** Style
import './RegisterDialog.css';

// ** MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';

const RegisterDialog = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}  PaperProps={{ style: { backgroundColor: '#222' } }}>
      <Tooltip title="Закрыть" arrow>
          <IconButton aria-label="Close" onClick={onClose} style={{ position: 'absolute', top: 10, right: 10 }}>
            <CloseIcon style={{ color: 'white' }} />
          </IconButton>
      </Tooltip>
      <DialogTitle>
          <Typography variant="h4" gutterBottom style={{ fontFamily: 'Arial', fontWeight: 'bold', color: 'white'}}>EventEaze</Typography>
          <Typography variant="subtitle1" style={{ color: 'white'}} gutterBottom>Пожалуйста зарегестрируйтесь на нашем сервисе</Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} direction="column" alignItems="stretch">
          <Grid item>
            <TextField
              name="username"
              label="Имя пользователя"
              variant="outlined"
              margin="normal"
              fullWidth
              value={formData.username}
              onChange={handleInputChange}
              InputLabelProps={{ style: { color: 'white' } }}
              inputProps={{ style: { color: 'white' } }}
            />
          </Grid>
          <Grid item>
            <TextField
              name="login"
              label="Логин"
              variant="outlined"
              margin="normal"
              fullWidth
              value={formData.login}
              onChange={handleInputChange}
              InputLabelProps={{ style: { color: 'white' } }}
              inputProps={{ style: { color: 'white' } }}
            />
          </Grid>
          <Grid item>
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleInputChange}
              InputLabelProps={{ style: { color: 'white' } }}
              inputProps={{ style: { color: 'white' } }}
            />
          </Grid>
          <Grid item>
            <TextField
              name="password"
              label="Пароль"
              type="password"
              variant="outlined"
              fullWidth
              value={formData.password}
              onChange={handleInputChange}
              InputLabelProps={{ style: { color: 'white' } }}
              inputProps={{ style: { color: 'white' } }}
            />
          </Grid>
          <Grid item>
            <TextField
              name="repeatPassword"
              label="Повторите пароль"
              type="password"
              variant="outlined"
              fullWidth
              value={formData.repeatPassword}
              onChange={handleInputChange}
              InputLabelProps={{ style: { color: 'white' } }}
              inputProps={{ style: { color: 'white' } }}
            />
          </Grid>
        </Grid>
        <Button onClick={handleSubmit} variant="contained" style={{ marginTop: '20px', backgroundColor: 'white', color: 'black' }} fullWidth>Зарегистрироваться</Button>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
