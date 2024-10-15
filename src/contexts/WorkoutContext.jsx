import React, { createContext, useState, useContext } from 'react';

const WorkoutContext = createContext();

export const useWorkout = () => useContext(WorkoutContext);

export function WorkoutProvider({ children }) {
  const [workouts, setWorkouts] = useState(() => {
    const savedWorkouts = localStorage.getItem('workouts');
    return savedWorkouts ? JSON.parse(savedWorkouts) : [];
  });

  const addWorkout = (workout) => {
    const updatedWorkouts = [...workouts, workout];
    setWorkouts(updatedWorkouts);
    localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
  };


  const deleteWorkout = (index) => {
    const updatedWorkouts = workouts.filter((_, i) => i !== index);
    setWorkouts(updatedWorkouts);
    localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
  };

  const value = { workouts, addWorkout, deleteWorkout }; 

  return <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>;
}
