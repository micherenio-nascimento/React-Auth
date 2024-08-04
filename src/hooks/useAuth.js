import { useState } from 'react';
import { signInWithEmailAndPassword } from '../firebase/firebase';

const useAuth = () => {
  const [error, setError] = useState('');

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirecionar ou lidar com o sucesso
    } catch (err) {
      setError(err.message);
    }
  };

  return { signIn, error };
};

export default useAuth;
