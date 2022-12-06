import React from 'react';

type TasksPropsType = {
    data: DataType
}
type DataType = {
    title: string,
    tasks: Array<TaskType>
    students: Array<string>
}
type TaskType = {
    taskId: number,
    title: string,
    isDone: boolean
}
const displayTask=(el:TaskType)=>{
    return (<li key={el.taskId}><span>{el.title}</span><input type="checkbox" checked={el.isDone}/></li>)
}
const displayStudents=(el:string,index:number)=>{
    return <li key={index}>{el}</li>
}
export const Tasks = (props: TasksPropsType) => {
    return (<div>
            <div>
                <h1>{props.data.title}</h1>
            </div>
            <ul> {props.data.tasks.map(displayTask)}</ul>
            <ul>{props.data.students.map(displayStudents)} </ul>
        </div>
    )
}
