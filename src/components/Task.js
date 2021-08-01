import { AiOutlineDelete } from 'react-icons/ai'

const Task = ({task, onDelete, toggleRemind}) => {
    const iconStyle = {
        fontSize: "1.5rem",
        cursor: 'pointer', 
    }
    return (
        <div className={`taskBox ${task.remind ? 'remind' : ''}`} onDoubleClick={() => toggleRemind(task.id)}> 
            <div>
                <h3>{task.task}</h3>
                <p>{task.day}</p>
            </div>
            <AiOutlineDelete 
                style={iconStyle} 
                onClick={() => onDelete(task.id)}
            />
        </div>
    )
}

export default Task
