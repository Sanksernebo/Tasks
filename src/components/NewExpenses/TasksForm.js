
import './TasksForm.css'
import React, { useState } from 'react';

const TasksForm = (props) => {
    const [enteredTask, setEnteredTask] = useState('')
    const [enteredPriority, setEnteredPriority] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [formEdit, setFormEdit] = useState(false);


    const titleChangeHandler = (event) => {
        setEnteredTask(event.target.value)
    }

    const priorityChangeHandler = (event) => {
        setEnteredPriority(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            task: enteredTask,
            priority: enteredPriority,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTask('')
        setEnteredPriority('')
        setEnteredDate('')
        setFormEdit(false)
    }


    return (
        <div>
            <button onClick={() => setFormEdit(true)}>Add Task</button>
            {formEdit && (
                <form onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>New Task</label>
                            <input type="text" onChange={titleChangeHandler} value={enteredTask}/>
                        </div>
                        <div className="new-expense__control">
                            <label>Priority</label>
                            <select value={props.selected} onChange={priorityChangeHandler}>
                                <option value='Critical'>Critical</option>
                                <option value='Medium'>Medium</option>
                                <option value='Low'>Low</option>
                            </select>
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input type="date" min="2023-01-18" max="2025-12-31" onChange={dateChangeHandler}/>
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit">Add Task</button>
                        <button onClick={() => setFormEdit(false)}>Cancel</button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default TasksForm