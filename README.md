# cs452-pe03-HuuDat

## Input  
The application provides an input field for users to enter task descriptions. Users interact by typing text into the input field and clicking the “Add Task” button to submit it. Each task is displayed with a “Delete” button for individual removal. These user inputs form the dynamic data the app will manage.

## Process  
This app is built using React and uses the `useState` hook for state management. The main state tracks the list of tasks and the input field’s current value. When the user adds a task, the input is pushed into the task array and re-rendered using `.map()`. When the user clicks “Delete,” the selected task is removed by filtering it out of the array. The UI updates instantly due to React’s state reactivity.

## Output  
The resulting interface displays all user-added tasks in a list format. Each task includes a "Delete" button that removes it from the view, offering immediate feedback.
