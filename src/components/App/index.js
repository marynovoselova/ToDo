import React, { Component } from "react";

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter";
import TodoList from "../TodoList";
import AddComponentItem from "../AddComponentItem";
import {FILTER_ALL, FILTER_ACTIVE, FILTER_DONE} from "../../const";

import './index.css';

export default class App extends Component {


    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem("Learn React", true),
            this.createTodoItem("Make Awesome App"),
            this.createTodoItem("Drink milk")
        ],
        search: '',
        filter: FILTER_ALL
    };

    onSearchPanel = (e) => {
        this.setState({
            search: e.target.value
        })
    };

    onClickFilter = (nameFilter) => {
        this.setState({
            filter: nameFilter
        })
    };

    createTodoItem(label, done = false) {
        return {
            label,
            important: false,
            done: done,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            }

        });

    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = { ...oldItem,
            [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    render() {

        const { todoData, search, filter } = this.state;
        const todoDataAfterFilter = todoData.filter((elem) => {
            const suitableBySearch = elem.label.toUpperCase().includes(search.toUpperCase());
            const suitableByFilter = filter === FILTER_ALL
                || (filter === FILTER_ACTIVE && !elem.done)
                || (filter === FILTER_DONE && elem.done);
            return suitableBySearch && suitableByFilter;
        });
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchPanel={this.onSearchPanel}
                        value={search}
                    />
                    <ItemStatusFilter
                        onClickFilter={this.onClickFilter}
                        selectedFilter={filter}
                    />
                </div>

                <TodoList
                    todos={todoDataAfterFilter}
                    onDeleted={ this.deleteItem }
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />

                <div className="create__component d-flex">
                    <AddComponentItem onAdded={this.addItem} />
                </div>
            </div>
        );
    }
};