export function getWorkouts() {
    return JSON.parse(localStorage.getItem('workouts')) || [];
}

export function saveWorkouts(workouts) {
    localStorage.setItem('workouts', JSON.stringify(workouts));
}
