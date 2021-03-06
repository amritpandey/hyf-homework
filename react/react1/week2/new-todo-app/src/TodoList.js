import React, { useState } from 'react';
import './App.css';
import TodoArray from './TodoArray';
import { TodoItem } from './TodoItem';

const todo = TodoArray();

const randomText = [
    'Brush teeth morning',
    'Brush teeth afternoon',
    'Brush teeth evening',
    'Brush teeth night',
];

export function TodoList() {
    const [todosState, setTodosState] = useState(todo);

    const addTodo = () => {
        const random = Math.floor(Math.random() * randomText.length);
        let newId;
        if (todosState.length === 0) {
            newId = 1;
        } else {
            newId = todosState[todosState.length - 1].id + 1;
        }
        const newTodo = {
            id: newId,
            description: randomText[random],
            checked: false,
        };

        setTodosState((prevTodos) => {
            return [...prevTodos, newTodo];
        });
    };

    const handleChangeCheckbox = (id) => {
        const newTodoItems = todosState.map((todo) => {
            if (todo.id === id) return { ...todo, checked: !todo.checked };
            return todo;
        });
        setTodosState(newTodoItems);
    };

    const handleDelete = (id) => {
        if (todosState.length === 1) {
            console.log('No items');
        }
        setTodosState((prevValue) =>
            prevValue.filter((removeTodo) => {
                return removeTodo.id !== id;
            }),
        );
    };

    const todoItems = todosState.map((todo) => (
        <TodoItem
            id={todo.id}
            description={todo.description}
            checked={todo.checked}
            key={todo.id}
            handleChange={handleChangeCheckbox}
            handleDelete={handleDelete}
        ></TodoItem>
    ));

    if (todosState.length < 1) {
        return (
            <div>
                <button onClick={addTodo}>Add todo</button>
                <span>No items</span>
            </div>
        );
    }

    return (
        <div>
            {todoItems}
            <button onClick={addTodo}>Add todo</button>
        </div>
    );
}
