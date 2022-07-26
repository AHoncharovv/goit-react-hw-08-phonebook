import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import authOperations from 'redux/auth/authOperations';
import PrivateRoute from 'Pages/Routes/PrivateRoute';
import PublicRoute from 'Pages/Routes/PublickRoure';
import authSelectors from 'redux/auth/authSelectors';
const Phonebook = lazy(() => import('./Pages/Phonebook'));
const Registration = lazy(() => import('./Pages/Registration'));
const Login = lazy(() => import('./Pages/Login'));
const Navigation = lazy(() => import('./components/Navigation'));

function App() {

  const isFetchingLoggedUser = useSelector(authSelectors.getFetchingLoggedUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchLoggedUser())
  }, [dispatch])
  
  return ( 
    !isFetchingLoggedUser ? (
      <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <Routes>
          <Route
            path='/register'
            element={
              <PublicRoute restricted>
                <Registration />
              </PublicRoute>}
          ></Route>
          <Route
            path='/login'
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>}
          ></Route>
          <Route
            path='/contacts'
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>}
          ></Route>
          <Route
            path='*'
            element={
              <PublicRoute>
                <Navigate to='/login' replace />
              </PublicRoute>}
          ></Route>
        </Routes>
    </Suspense>
    </>
    )
      :
      <h2>Loading...</h2>
  ); 
};

export default App;