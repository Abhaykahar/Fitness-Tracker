import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';


function SetGoals() {
  const [goalType, setGoalType] = useState('weekly'); 
  const [goal, setGoal] = useState('');
  const [currentProgress, setCurrentProgress] = useState('');


  useEffect(() => {
    const savedGoal = localStorage.getItem('fitnessGoal');
    const savedProgress = localStorage.getItem('currentProgress');
    if (savedGoal) setGoal(savedGoal);
    if (savedProgress) setCurrentProgress(savedProgress);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('fitnessGoal', goal);
    localStorage.setItem('goalType', goalType);
    toast.success('Goal set successfully!');
  };

  const handleProgressSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('currentProgress', currentProgress);
    toast.success('Progress updated successfully!');
  };

  const progressPercentage = goal ? Math.min((currentProgress / goal) * 100, 100).toFixed(2) : 0;

  return (
    <>
     
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Set Fitness Goals</h2>

       
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-semibold mb-4">Define Your Goal</h3>
          <form onSubmit={handleSubmit}>
            <select
              value={goalType}
              onChange={(e) => setGoalType(e.target.value)}
              className="block w-full mb-4 p-2 border border-gray-300 rounded"
            >
              <option value="weekly">Weekly Goal</option>
              <option value="monthly">Monthly Goal</option>
            </select>
            <input
              type="number"
              placeholder="Enter your goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="block w-full mb-4 p-2 border border-gray-300 rounded"
              required
            />
            <button type="submit" className="bg-black text-white px-4 py-2 rounded w-full">Set Goal</button>
          </form>
        </div>

     
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Update Current Progress</h3>
          <form onSubmit={handleProgressSubmit}>
            <input
              type="number"
              placeholder="Current Progress"
              value={currentProgress}
              onChange={(e) => setCurrentProgress(e.target.value)}
              className="block w-full mb-4 p-2 border border-gray-300 rounded"
              required
            />
            <button type="submit" className="bg-black text-white px-4 py-2 rounded w-full">Update Progress</button>
          </form>
        </div>

      
        <div className="mt-6 bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Current Status</h3>
          <p className="text-xl">Current Goal: <strong>{goal} {goalType}</strong></p>
          <p className="text-xl">Current Progress: <strong>{currentProgress}</strong></p>
          <p className="text-xl">Progress Percentage: <strong>{progressPercentage}%</strong></p>
        </div>
      </div>
    </>
  );
}

export default SetGoals;
