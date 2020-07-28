import React from "react";
import './index.css';

const AppHeader = ({toDo, done}) => {
    return (
        <div className="header__content">
            <h1 className="header__text">Todo List</h1>
            <h2 className="header__counters">{toDo} more to do, {done} done</h2>
        </div>
    );
};

export default AppHeader;