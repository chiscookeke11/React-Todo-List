import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const EditTodoForm = ({editTodo, task}) => {


    const [value, setValue] = useState(task.task)
    
    const handleSubmit = (e) => {
  if(value <= 0){
    alert("please input a task")
    e.preventDefault()
  }
  else{
    e.preventDefault()
    editTodo(value, task.id)
    // e.target.reset()
    setValue("")
  }
    }

  return (
    <form className='w-full max-w-full flex flex-row items-stretch justify-center mb-3  p-2 gap-3 text-md flex-wrap' onSubmit={handleSubmit} >
    <input 
      type="text"
      value={value} 
      placeholder='update task' 
      onChange={(e) => setValue(e.target.value) }
      className='flex-grow outline-none border border-purple-800 p-3 text-md max-w-full rounded-[10px]' 
    />
    <button className='min-w-[100px] flex-shrink-0 rounded-[10px] px-5 py-3 text-white bg-purple-800 flex items-center justify-center gap-2 '><FaPlus/> Update Task</button>
  </form>
  
  )
}

export default EditTodoForm