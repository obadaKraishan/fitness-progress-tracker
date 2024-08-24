import { renderChart } from './charts.js';
import { getWorkouts, saveWorkouts } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const workoutForm = document.getElementById('workout-form');
    const workoutList = document.getElementById('workout-list');
    const editModal = document.getElementById('edit-modal');
    const editWorkoutForm = document.getElementById('edit-workout-form');
    const cancelEditBtn = document.getElementById('cancel-edit');

    let workouts = getWorkouts();
    let currentEditIndex = null;

    // Handle form submission for adding a workout
    workoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const workoutName = document.getElementById('workout-name').value;
        const workoutDate = document.getElementById('workout-date').value;
        const workoutDuration = document.getElementById('workout-duration').value;

        if (workoutName === '' || workoutDate === '' || workoutDuration === '') {
            alert('Please fill out all fields.');
            return;
        }

        const workout = {
            name: workoutName,
            date: workoutDate,
            duration: parseInt(workoutDuration, 10),
        };

        workouts.push(workout);
        saveWorkouts(workouts);

        workoutForm.reset();
        renderWorkoutList();
        renderChart(workouts);
    });

    // Handle form submission for editing a workout
    editWorkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const workoutName = document.getElementById('edit-workout-name').value;
        const workoutDate = document.getElementById('edit-workout-date').value;
        const workoutDuration = document.getElementById('edit-workout-duration').value;

        if (workoutName === '' || workoutDate === '' || workoutDuration === '') {
            alert('Please fill out all fields.');
            return;
        }

        workouts[currentEditIndex] = {
            name: workoutName,
            date: workoutDate,
            duration: parseInt(workoutDuration, 10),
        };

        saveWorkouts(workouts);
        renderWorkoutList();
        renderChart(workouts);
        closeEditModal();
    });

    // Cancel editing
    cancelEditBtn.addEventListener('click', closeEditModal);

    // Function to render the workout list
    function renderWorkoutList() {
        workoutList.innerHTML = '';

        workouts.forEach((workout, index) => {
            const workoutItem = document.createElement('div');
            workoutItem.classList.add('bg-white', 'shadow-md', 'rounded', 'p-4', 'flex', 'justify-between', 'items-center');

            workoutItem.innerHTML = `
                <div>
                    <h3 class="text-lg font-semibold">${workout.name}</h3>
                    <p class="text-gray-600">${new Date(workout.date).toLocaleDateString()}</p>
                    <p class="text-gray-600">${workout.duration} minutes</p>
                </div>
                <div>
                    <button class="text-blue-500 hover:text-blue-700 mr-4" onclick="editWorkout(${index})">Edit</button>
                    <button class="text-red-500 hover:text-red-700" onclick="deleteWorkout(${index})">Delete</button>
                </div>
            `;

            workoutList.appendChild(workoutItem);
        });
    }

    // Function to delete a workout
    window.deleteWorkout = (index) => {
        workouts.splice(index, 1);
        saveWorkouts(workouts);
        renderWorkoutList();
        renderChart(workouts);
    };

    // Function to open the edit modal
    window.editWorkout = (index) => {
        currentEditIndex = index;

        const workout = workouts[index];
        document.getElementById('edit-workout-name').value = workout.name;
        document.getElementById('edit-workout-date').value = workout.date;
        document.getElementById('edit-workout-duration').value = workout.duration;

        editModal.classList.remove('hidden');
    };

    // Function to close the edit modal
    function closeEditModal() {
        editModal.classList.add('hidden');
        currentEditIndex = null;
    }

    // Initial render of the workout list and chart
    renderWorkoutList();
    renderChart(workouts);
});
