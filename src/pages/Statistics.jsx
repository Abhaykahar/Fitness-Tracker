import { useWorkout } from '../contexts/WorkoutContext';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Header from '../components/Header';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Statistics() {
  const { workouts } = useWorkout();

  
  const calorieData = {
    labels: workouts.map((w) => w.date),
    datasets: [
      {
        label: 'Calories Burned',
        data: workouts.map((w) => w.calories),
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  
  const activityData = () => {
    const activityLabels = [];
    const activityDurations = [];

    workouts.forEach((workout) => {
      const index = activityLabels.indexOf(workout.activity);
      if (index === -1) {
        activityLabels.push(workout.activity);
        activityDurations.push(workout.duration);
      } else {
        activityDurations[index] += workout.duration;
      }
    });

    return {
      labels: activityLabels,
      datasets: [
        {
          label: 'Activity Types Duration (minutes)',
          data: activityDurations,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
          ],
        },
      ],
    };
  };

  return (
    <>
      
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Workout Statistics</h2>

      
        <div className="flex flex-wrap justify-center gap-6">
         
          <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-1/2">
            <h3 className="text-2xl mb-4">Calories Burned Over Time</h3>
            <Line data={calorieData} options={{ responsive: true }} />
          </div>

          
          <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-1/2">
            <h3 className="text-2xl mb-4">Activity Types Duration</h3>
            <Bar data={activityData()} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
