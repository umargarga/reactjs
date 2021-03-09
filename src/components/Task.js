import { FaTimes } from 'react-icons/fa'
const Task = ({ task, onDelete }) => {
    return (
        <div className='card mb-1'>
            <div className="card-header">
                {task.text } <FaTimes className='text-danger float-right' onClick={() => onDelete(task.id)} />
            </div>
            <div className='card-body'>
                <p>{task.day}</p>
            </div>
            
        </div>
    )
}

export default Task
