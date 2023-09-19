import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoList from './todoList';

const todoList = [
    { id: 1, text: 'Learn React', isCompleted: true },
    { id: 2, text: 'Learn Redux', isCompleted: false },
    { id: 3, text: 'Learn React Router', isCompleted: false },
    { id: 4, text: 'Learn React Native', isCompleted: false },
    { id: 5, text: 'Learn GraphQL', isCompleted: false },
    { id: 6, text: 'Be happy with what you got', isCompleted: false}
]



ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <h1>Here is our precious ToDo List</h1>
        <ToDoList todoItems={todoList}/>
    </>
);
