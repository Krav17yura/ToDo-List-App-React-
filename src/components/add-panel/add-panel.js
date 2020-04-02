import React, { Component } from 'react';
import './add-panel.css'

export default class AddPanel extends Component {
    state = {
        label: ""
    }
    onLabalChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
            this.props.addItem(this.state.label);
            /*  document.querySelector(".add__input").value = "";  */
            this.setState({
                label: ""
            })
        
    };

    render() {
        return (
            <form action="#" className='add__row'
                onSubmit={this.onSubmit}>
                <input type='text' className="add__input" placeholder="What needs to be done?" onChange={this.onLabalChange} value={this.state.label} />
                <button type="submit" className="add__btn">Add new task</button>
            </form>

        )
    }
}

