import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const LoginForm = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(email, password);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          '& .MuiInputLabel-root': {
            color: '#6495ED', // Cor do rótulo
          },
          '& .MuiInputBase-input': {
            color: '#6495ED', // Cor do texto
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#6495ED', // Cor da borda
            },
            '&:hover fieldset': {
              borderColor: '#6495ED', // Cor da borda ao passar o mouse
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6495ED', // Cor da borda quando focado
            },
          },
        }}
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{
          '& .MuiInputLabel-root': {
            color: '#6495ED', // Cor do rótulo
          },
          '& .MuiInputBase-input': {
            color: '#6495ED', // Cor do texto
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#6495ED', // Cor da borda
            },
            '&:hover fieldset': {
              borderColor: '#6495ED', // Cor da borda ao passar o mouse
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6495ED', // Cor da borda quando focado
            },
          },
        }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
    </Box>
  );
};

export default LoginForm;
