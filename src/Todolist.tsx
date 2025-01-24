import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import { FilterValuesType, TasksType } from './App';
import { Button } from './components/Buttons';



type PropsType = {
    key: number
    id: number
    title: string
    tasks: Array<TasksType>
    students: Array<string>
    removeTask: (taskId: string, todolistId: number) => void
    changeFilter: (value: FilterValuesType, todolistId: number) => void
    addTask: (title: string, todolistId: number) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
    removeTodolist: (id: number) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            // addTask();
        }
    }
    //handlers
    const removeTodolistHandler = () => props.removeTodolist(props.id)
    const addTaskHandker = () => props.addTask(title, props.id)


    return <div>
        <h3> {props.title}
            <Button title={"x"} onClick={removeTodolistHandler} />

        </h3>
        <div>
            <input value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                className={error ? "error" : ""}
            />
            <Button onClick={addTaskHandker} title={"+"} />
            {error && <div className="error-message">{error}</div>}

        </div>

        <ul>
            {
                props.tasks.map(t => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.taskId, newIsDoneValue, props.id);
                    }
                    //handlers
                    const removetaskHandler = () => props.removeTask(t.taskId, props.id)

                    return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone} />
                        <span>{t.title}</span>
                        <Button title={"x"} onClick={removetaskHandler} />
                    </li>
                })
            }
        </ul>
        <div>
            <Button className={props.filter === 'all' ? "active-filter" : ""} onClick={() => { }} title={"All"} />
            <Button className={props.filter === 'active' ? "active-filter" : ""} onClick={() => { }} title={"Active"} />
            <Button className={props.filter === 'completed' ? "active-filter" : ""} onClick={() => { }} title={"Completed"} />
        </div>
        <p></p>
        {
            props.students.map((el) => {
                return (
                    <div>{el}</div>
                )
            })
        }
    </div>
}


