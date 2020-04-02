import React, { Component } from 'react';

import "./normalize.css"
import "./app.css"

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list'
import StatusSortButtons from '../status-sort-button';
import AddPanel from '../add-panel';

export default class App extends Component {
    newId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffe'),
            this.createTodoItem('Create React App'),
            this.createTodoItem('learn JS'),
            this.createTodoItem("Go Fishing")
        ],
        term: '',
        filter: 'active' //all, active, done
    }

    createTodoItem(label) {
        return {
            label: label,
            done: false,
            important: false,
            id: this.newId++
        };
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)
            const newArr = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArr
            }
        })
    }
    addItem = (text) => {
        if (text.trim().length === 0) {
            alert("Eror 404 (Enter item)");
        } else {


            const newItem = this.createTodoItem(text);

            this.setState(({ todoData }) => {
                const newArr = [
                    ...todoData,
                    newItem
                ]
                return {
                    todoData: newArr
                }
            })
        }
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    }
    onSearchChange = (term) => {
        this.setState({ term });
    }

    search(arr, term) {
        if (term.trim().length === 0) {
            return arr;
        }

        return arr.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase().trim()) > -1;
        })
    }

    onFilterChange = (filter) => {
        this.setState({ filter });
    }

    filter(arr, filter) {
        switch (filter) {
            case "all":
                return arr;
            case 'active':
                return arr.filter((item) => !item.done);
            case 'done':
                return arr.filter((item) => item.done);
            default:
                return arr;
        }
    }

    render() {
        const { term, filter } = this.state;

        const visibleItem = this.filter(this.search(this.state.todoData, term), filter);
        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;
        return (
            <div className="container">
                <AppHeader
                    toDo={todoCount}
                    done={doneCount} />
                <SearchPanel
                    onSearchChange={this.onSearchChange} />
                <StatusSortButtons
                    filter={filter}
                    onFilterChange={this.onFilterChange} />
                <ToDoList
                    todos={visibleItem}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddPanel
                    addItem={this.addItem} />
            </div>
        );
    }
}

