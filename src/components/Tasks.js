import Task from './Task'

const Tasks = ({taskProp, onDelete, onRemind}) => {
    return (
        <div>
            {taskProp.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} toggleRemind={onRemind}/>
            ))}
        </div>
    )
}


export default Tasks
