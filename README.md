# Student Scoreboard

Student Scoreboard is a simple React project created for a Web Development II assignment.  
The application helps manage student records by allowing users to add students, view their marks, update marks, and check whether a student has passed or failed.

## Project Objective

The main purpose of this project is to practice:

- building a React application using Vite
- working with functional components
- using state and props
- handling forms and user input
- applying conditional rendering
- styling a complete interface with plain CSS

## Features

- Add a new student using a form
- Display a list of student names and marks
- Update student marks directly from the table
- Show pass or fail status based on marks
- Display total students
- Display number of passed students
- Display average marks

## Technologies Used

- React
- Vite
- JavaScript (JSX)
- CSS

## Project Structure

The project is divided into small reusable components:

- `Header` for the main title
- `StudentForm` for adding new students
- `SummaryCards` for total, passed, and average marks
- `StudentTable` for displaying records
- `StudentRow` for handling each student entry

## How It Works

1. The application starts with some sample student data.
2. New students can be added through the form.
3. Each student row has an input field and save button to update marks.
4. The pass or fail result changes automatically according to the updated marks.
5. Summary cards update automatically whenever data changes.

## How to Run

1. Open the project folder in terminal
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local link shown in the terminal in your browser

## Learning Outcome

This project demonstrates the basic concepts of React in a practical way by combining components, state management, form handling, conditional rendering, and styling into one small application.
