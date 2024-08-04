import React, { useState } from 'react';
import { Container, Typography, Box, Snackbar, Alert } from '@mui/material';
import LoginForm from '../components/LoginForm';
import useAuth from '../hooks/useAuth'; 

const LoginPage = () => {
  const { signIn, error } = useAuth();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success'); 

  const handleSignIn = async (email, password) => {
    try {
      await signIn(email, password);
      setMessage('Autenticação bem-sucedida!');
      setSeverity('success');
    } catch (err) {
      setMessage('Falha na autenticação: ' + err.message);
      setSeverity('error');
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <LoginForm onSignIn={handleSignIn} />
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default LoginPage;
