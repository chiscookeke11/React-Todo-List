import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='bg-purple-800 w-full flex flex-row items-center my-4 justify-between rounded-[10px] px-3 py-3 font-bold text-lg text-white  ' >
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? `completed` : ""}`} >{task.task}</p>
        <div className='flex flex-row items-center gap-4 ' >
            <FaEdit className='cursor-pointer' 
            onClick={() => editTodo(task.id)}
            />
            <FaTrash className='cursor-pointer' onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}

export default Todo