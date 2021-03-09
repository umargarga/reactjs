import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText ] = useState('')
    const [day, setDay ] = useState('')
    const [reminder, setReminder ] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({text, day, reminder})
        setText('');
        setDay('')
        setReminder(false)
    }

    
    return (
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label htmlFor='Task'>Task</label>
                <input type='text' className='form-control' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='Date'>Date & Time</label>
                <input type='text' className='form-control' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='AddTask'>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Save Task' className='btn btn-primary btn-block' />
            <hr/>
        </form>
        
    )
}

export default AddTask
