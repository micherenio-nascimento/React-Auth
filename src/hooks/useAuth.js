import { useState } from 'react';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase, auth } from '../firebase/firebase';

const useAuth = () => {
  const [error, setError] = useState('');

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPasswordFirebase(auth, email, password);
      toast.success('Autenticação bem-sucedida!');

    } catch (err) {
      setError(err.message);
      toast.error('Falha na autenticação: ' + err.message); 
    }
  };

  return { signIn, error };
};

export default useAuth;
