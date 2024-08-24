document.addEventListener('DOMContentLoaded', () => {
    const workoutForm = document.getElementById('workout-form');
    const workoutList = document.getElementById('workout-list');

    // Array to hold the workout data
    let workouts = JSON.parse(localStorage.getItem('workouts')) || [];

    // Function to handle form submission
    workoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const workoutName = document.getElementById('workout-name').value;
        const workoutDate = document.getElementById('workout-date').value;
        const workoutDuration = document.getElementById('workout-duration').value;

        // Basic validation
        if (workoutName === '' || workoutDate === '' || workoutDuration === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Create a new workout object
        const workout = {
            name: workoutName,
            date: workoutDate,
            duration: parseInt(workoutDuration, 10),
        };

        // Add workout to array
        workouts.push(workout);

        // Save to local storage
        localStorage.setItem('workouts', JSON.stringify(workouts));

        // Clear form
        workoutForm.reset();

        // Update workout list
        renderWorkoutList();
    });

    // Function to render the workout list
    function renderWorkoutList() {
        // Clear the current list
        workoutList.innerHTML = '';

        // Loop through workouts array and create elements for each workout
        workouts.forEach((workout, index) => {
            const workoutItem = document.createElement('div');
            workoutItem.classList.add('bg-white', 'shadow-md', 'rounded', 'p-4', 'flex', 'justify-between', 'items-center');

            workoutItem.innerHTML = `
                <div>
                    <h3 class="text-lg font-semibold">${workout.name}</h3>
                    <p class="text-gray-600">${new Date(workout.date).toLocaleDateString()}</p>
                    <p class="text-gray-600">${workout.duration} minutes</p>
                </div>
                <button class="text-red-500 hover:text-red-700" onclick="deleteWorkout(${index})">Delete</button>
            `;

            workoutList.appendChild(workoutItem);
        });
    }

    // Function to delete a workout
    window.deleteWorkout = (index) => {
        workouts.splice(index, 1);

        // Update local storage
        localStorage.setItem('workouts', JSON.stringify(workouts));

        renderWorkoutList();
    };

    // Initial render of the workout list
    renderWorkoutList();
});
