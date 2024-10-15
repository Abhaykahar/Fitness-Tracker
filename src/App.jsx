import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { WorkoutProvider } from './contexts/WorkoutContext';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import LogWorkout from './pages/LogWorkout';
import Statistics from './pages/Statistics';
import SetGoals from './pages/SetGoals';
import PrivateRoute from './routes/PrivateRoute';
import Header from './components/Header';

function App() {
  return (
    <WorkoutProvider>
      <AuthProvider>
        <Router>
          <Header/>
          <div> 
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
             
              <Route 
                path="/dashboard" 
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/log-workout" 
                element={
                  <PrivateRoute>
                    <LogWorkout />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/statistics" 
                element={
                  <PrivateRoute>
                    <Statistics />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/set-goals" 
                element={
                  <PrivateRoute>
                    <SetGoals />
                  </PrivateRoute>
                } 
              />

             
              <Route path="/" element={<Navigate to="/signup" />} /> 
            </Routes>

            <ToastContainer
            autoClose={1000}
            />  
          </div>
        </Router>
      </AuthProvider>
    </WorkoutProvider>
  );
}

export default App;
