import React from "react";

import './TaskList.css'
import TasksItem from "./TasksItem";

const TaskList = (props) => {
    if (props.filteredTasks.length === 0) {
        return <p className='task-list__fallback'>No tasks found.</p>
    }

    return (
        <ul className='task-list'>
            {
                props.filteredTasks.map((task) => {
                    return <TasksItem
                        id={task.id}
                        task={task.task}
                        priority={task.priority}
                        date={task.date}
                    ></TasksItem>
                })
            }
        </ul>
    )
}

export default TaskList