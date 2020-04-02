import React, { Component } from 'react';
import './todo-list-item.css';


export default class ToDoListItem extends Component {
 
   render() {

      const { label, onToggleImportant, onToggleDone,done, important } = this.props;
     

      let className = "todo__item";
      if (done) {
         className += " done";
      }
      if (important) {
         className += " important"
      }

      return (
         <span className="item__colums">
            <span className={className} onClick={onToggleDone} > {label} </span>


            <button type="button" className="btn-icon-first btn-outline-success btn-sm float-right" onClick={onToggleImportant} >
               <i className="fa fa-exclamation" />
            </button>
            <button type="button" className="btn-icon-second  btn-outline-danger btn-sm float-right" onClick={this.props.onDeleted} >
               <i className="fa fa-trash-o" />
            </button>
         </span>


      )
   }
}



