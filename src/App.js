import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import authOperations from 'redux/auth/authOperations';
const Phonebook = lazy(() => import('./Pages/Phonebook'));
const Registration = lazy(() => import('./Pages/Registration'));
const Login = lazy(() => import('./Pages/Login'));
const Navigation = lazy(() => import('./components/Navigation'));



function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchLoggedUser())
  }, [dispatch])
  
  return ( 
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <Routes>
          <Route path='/register' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contacts' element={<Phonebook />} />
          <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
    </Suspense>
    </>
  ); 
};

export default App;