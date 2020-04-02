import React, { Component } from 'react';
import './status-sort-button.css'

export default class StatusSortButtons extends Component {
    buttons = [
        { name: "all", label: "All" },
        { name: "active", label: "Active" },
        { name: "done", label: "Done" }
    ]

    render() {
        
        const {filter, onFilterChange} = this.props;

        const button = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn active': 'btn';
            return <button className={clazz} type="button" key={name} onClick={() => onFilterChange(name)}>{label}</button>
        })

        return (
            <div className="sort__block">
                <div className="sort__row">
                    {button}
                </div>
            </div>
        )
    }
}



