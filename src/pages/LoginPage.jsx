import React from 'react';
import LoginForm from '../components/LoginForm';
import { Container, Typography, Box } from '@mui/material';

const LoginPage = () => {
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
        <LoginForm />
      </Box>
    </Container>
  );
};

export default LoginPage;
