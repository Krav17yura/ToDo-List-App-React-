import React from 'react';
import ToDoListItem from '../todo-list-item'
import './todo-list.css'
const ToDoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list__item">
                <ToDoListItem {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone= {() => onToggleDone(id)} />
            </li>
        )
    })
    return (
        <ol className="todo__list">
            {elements}
        </ol>
    );
}

export default ToDoList;