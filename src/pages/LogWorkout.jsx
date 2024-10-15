import { useState } from 'react';
import { useWorkout } from '../contexts/WorkoutContext';
import { toast } from 'react-toastify';


function LogWorkout() {
  const [workout, setWorkout] = useState({ activity: '', duration: '', calories: '', date: '' });
  const { addWorkout } = useWorkout();

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout(workout);
    toast.success('Workout logged successfully!');
    setWorkout({ activity: '', duration: '', calories: '', date: '' });
  };

  return (
    <>

      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Log Your Workout</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="activity">Activity</label>
              <input
                type="text"
                id="activity"
                placeholder="Enter activity"
                value={workout.activity}
                onChange={(e) => setWorkout({ ...workout, activity: e.target.value })}
                className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="duration">Duration (minutes)</label>
              <input
                type="number"
                id="duration"
                placeholder="Enter duration"
                value={workout.duration}
                onChange={(e) => setWorkout({ ...workout, duration: e.target.value })}
                className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="calories">Calories Burned</label>
              <input
                type="number"
                id="calories"
                placeholder="Enter calories burned"
                value={workout.calories}
                onChange={(e) => setWorkout({ ...workout, calories: e.target.value })}
                className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={workout.date}
                onChange={(e) => setWorkout({ ...workout, date: e.target.value })}
                className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <button type="submit" className="bg-black text-white px-4 py-2 rounded transition duration-200 hover:bg-gray-600 w-full">
              Log Workout
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogWorkout;
