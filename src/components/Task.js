import { FaTimes } from 'react-icons/fa'
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className='card mb-1' onDoubleClick={() => onToggle(task.id)}>
            <div className={`task ${task.reminder ? 'card-header text-success' : 'card-header text-danger'}`}>
                {task.text } <FaTimes className='text-danger float-right' onClick={() => onDelete(task.id)} />
            </div>
            <div className='card-body'>
                <p>{task.day}</p>
            </div>
            
        </div>
    )
}

export default Task
