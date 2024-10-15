import { useWorkout } from '../contexts/WorkoutContext';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';

function Dashboard() {
  const { workouts, deleteWorkout } = useWorkout();
  const [weeklyGoal, setWeeklyGoal] = useState('');
  const [currentProgress, setCurrentProgress] = useState('');

  
  useEffect(() => {
    const savedGoal = localStorage.getItem('fitnessGoal');
    const savedProgress = localStorage.getItem('currentProgress');
    if (savedGoal) setWeeklyGoal(savedGoal);
    if (savedProgress) setCurrentProgress(savedProgress);
  }, []);

  const handleDelete = (index) => {
    deleteWorkout(index);
    toast.success('Workout deleted successfully!');
  };

  const progressPercentage = weeklyGoal ? Math.min((currentProgress / weeklyGoal) * 100, 100).toFixed(2) : 0;

  return (
    <>
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Dashboard</h2>

        
        <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
          <h3 className="text-2xl font-semibold mb-4">Recent Workouts</h3>
          {workouts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {workouts.map((workout, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow hover:shadow-md transition-shadow duration-300 relative"
                >
                  <h4 className="text-lg font-bold">{workout.activity}</h4>
                  <p className="text-gray-600">
                    <strong>Duration:</strong> {workout.duration} mins
                  </p>
                  <p className="text-gray-600">
                    <strong>Calories Burned:</strong> {workout.calories} kcal
                  </p>
                  <p className="text-gray-500 text-sm">
                    <strong>Date:</strong> {new Date(workout.date).toLocaleDateString()}
                  </p>
               
                  <button
                    onClick={() => handleDelete(index)}
                    className="absolute top-2 right-2 bg-black text-white rounded px-2 py-1 hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No recent workouts logged.</p>
          )}
        </div>

     
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-2xl font-semibold mb-4">Weekly Goals</h3>
          <p className="text-lg mb-2">Weekly Goal: <strong>{weeklyGoal} mins</strong></p>
          <p className="text-lg mb-2">Current Progress: <strong>{currentProgress} mins</strong></p>
          <p className="text-lg mb-4">Progress Percentage: <strong>{progressPercentage}%</strong></p>
          <div className="w-full bg-gray-200 rounded-full">
            <div
              className="bg-blue-600 text-xs font-medium text-center text-white rounded-full"
              style={{ width: `${progressPercentage}%`, height: '20px' }}
            >
              {progressPercentage}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
