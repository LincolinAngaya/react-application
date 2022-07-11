import React from 'react'
import{FaTimes} from 'react-icons/fa'

const Task = ({tasks}) => {
    return (
          <div className='task'>
            <h3>{tasks.text}<FaTimes style={{color:'red',cursor:'pointer'}} /></h3>
            <p>{tasks.day}</p>

        </div>
    )
}

export default Task;