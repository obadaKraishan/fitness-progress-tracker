/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _charts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts.js */ \"./src/js/charts.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/js/data.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var workoutForm = document.getElementById('workout-form');\n  var workoutList = document.getElementById('workout-list');\n\n  // Array to hold the workout data\n  var workouts = (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.getWorkouts)();\n\n  // Function to handle form submission\n  workoutForm.addEventListener('submit', function (e) {\n    e.preventDefault();\n\n    // Get form data\n    var workoutName = document.getElementById('workout-name').value;\n    var workoutDate = document.getElementById('workout-date').value;\n    var workoutDuration = document.getElementById('workout-duration').value;\n\n    // Basic validation\n    if (workoutName === '' || workoutDate === '' || workoutDuration === '') {\n      alert('Please fill out all fields.');\n      return;\n    }\n\n    // Create a new workout object\n    var workout = {\n      name: workoutName,\n      date: workoutDate,\n      duration: parseInt(workoutDuration, 10)\n    };\n\n    // Add workout to array\n    workouts.push(workout);\n\n    // Save to local storage\n    (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.saveWorkouts)(workouts);\n\n    // Clear form\n    workoutForm.reset();\n\n    // Update workout list and chart\n    renderWorkoutList();\n    (0,_charts_js__WEBPACK_IMPORTED_MODULE_0__.renderChart)(workouts);\n  });\n\n  // Function to render the workout list\n  function renderWorkoutList() {\n    // Clear the current list\n    workoutList.innerHTML = '';\n\n    // Loop through workouts array and create elements for each workout\n    workouts.forEach(function (workout, index) {\n      var workoutItem = document.createElement('div');\n      workoutItem.classList.add('bg-white', 'shadow-md', 'rounded', 'p-4', 'flex', 'justify-between', 'items-center');\n      workoutItem.innerHTML = \"\\n                <div>\\n                    <h3 class=\\\"text-lg font-semibold\\\">\".concat(workout.name, \"</h3>\\n                    <p class=\\\"text-gray-600\\\">\").concat(new Date(workout.date).toLocaleDateString(), \"</p>\\n                    <p class=\\\"text-gray-600\\\">\").concat(workout.duration, \" minutes</p>\\n                </div>\\n                <button class=\\\"text-red-500 hover:text-red-700\\\" onclick=\\\"deleteWorkout(\").concat(index, \")\\\">Delete</button>\\n            \");\n      workoutList.appendChild(workoutItem);\n    });\n  }\n\n  // Function to delete a workout\n  window.deleteWorkout = function (index) {\n    workouts.splice(index, 1);\n\n    // Update local storage\n    (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.saveWorkouts)(workouts);\n\n    // Re-render the workout list and chart\n    renderWorkoutList();\n    (0,_charts_js__WEBPACK_IMPORTED_MODULE_0__.renderChart)(workouts);\n  };\n\n  // Initial render of the workout list and chart\n  renderWorkoutList();\n  (0,_charts_js__WEBPACK_IMPORTED_MODULE_0__.renderChart)(workouts);\n});\n\n//# sourceURL=webpack://fitness-progress-tracker/./src/js/app.js?");

/***/ }),

/***/ "./src/js/charts.js":
/*!**************************!*\
  !*** ./src/js/charts.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderChart: () => (/* binding */ renderChart)\n/* harmony export */ });\n// Remove this line:\n// import Chart from 'chart.js/auto';\n\n// Instead, rely on Chart.js being loaded globally\nvar ctx = document.getElementById('myChart').getContext('2d');\nfunction renderChart(workouts) {\n  var dates = workouts.map(function (workout) {\n    return workout.date;\n  });\n  var durations = workouts.map(function (workout) {\n    return workout.duration;\n  });\n  var chart = new Chart(ctx, {\n    type: 'line',\n    data: {\n      labels: dates,\n      datasets: [{\n        label: 'Workout Duration (minutes)',\n        data: durations,\n        fill: false,\n        borderColor: 'rgb(75, 192, 192)',\n        tension: 0.1\n      }]\n    },\n    options: {\n      responsive: true,\n      scales: {\n        x: {\n          type: 'time',\n          time: {\n            unit: 'day'\n          }\n        },\n        y: {\n          beginAtZero: true\n        }\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack://fitness-progress-tracker/./src/js/charts.js?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWorkouts: () => (/* binding */ getWorkouts),\n/* harmony export */   saveWorkouts: () => (/* binding */ saveWorkouts)\n/* harmony export */ });\nfunction getWorkouts() {\n  return JSON.parse(localStorage.getItem('workouts')) || [];\n}\nfunction saveWorkouts(workouts) {\n  localStorage.setItem('workouts', JSON.stringify(workouts));\n}\n\n//# sourceURL=webpack://fitness-progress-tracker/./src/js/data.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;