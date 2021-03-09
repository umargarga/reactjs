const Task = ({ task }) => {
    return (
        <div className='card mb-1'>
            <div className="card-header">
                {task.text }
            </div>
            <div className='card-body'>
                <p>{task.day}</p>
            </div>
            
        </div>
    )
}

export default Task
