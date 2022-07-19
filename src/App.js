import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Phonebook = lazy(() => import('./Pages/Phonebook.js'));
const Registration = lazy(() => import('./Pages/Registration.js'));
const Login = lazy(() => import('./Pages/Login.js'));
const Navigation = lazy(() => import('./components/Navigation'));


function App() {
  
  return ( 
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
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