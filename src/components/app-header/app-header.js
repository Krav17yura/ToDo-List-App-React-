import React from 'react';
import "./app-header.css"
const AppHeader = ({toDo, done}) => {
    return (
        <div className="header__row">
            <h1 className="header__title">Todo List</h1>
            <h2 className="header__info">{toDo} more to do, {done} done.</h2>
        </div >
    )
}

export default AppHeader;