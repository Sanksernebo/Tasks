import React, {useState} from 'react'

import './TasksItem.css'
import TasksDate from "./TasksDate";
import Card from "../UI/Card"

const TasksItem = (props) => {

    return (
        <Card className="expense-item">
            <TasksDate date={props.date}></TasksDate>
            <div className="expense-item__description">
                <h2>{props.task}</h2>
                <div className="expense-item__price">{props.priority}</div>
            </div>
        </Card>
    )
}

export default TasksItem