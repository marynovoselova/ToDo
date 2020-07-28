import React from "react";
import TodoListItem from "../TodoListItem";
import './index.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

    const elements = todos.map((item) => {
        const { id, ...otherItemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem { ...otherItemProps }
                onDeleted={() => onDeleted(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id)}
                />
            </li>
        );
    });
    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;