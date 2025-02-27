import React, { useState } from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = () => {

    const [todos, setTodos] = useState([])
    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }
    const toggleComplete = id => {
        setTodos(
          todos.map((todo) => 
            todo.id === id 
              ? { ...todo, completed: !todo.completed } 
              : todo
          )
        );
      };
      const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
      }
      const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, isEditing: !todo.isEditing} : todo
        ))
      }

      const editTask = (task, id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id
              ? { ...todo, task, isEditing: !todo.isEditing }
              : todo
          )
        );
      };
      

  return (
    <div className='bg-white w-[50vw] min-w-[350px] max-h-[80vh] min-h-[400px] overflow-y-auto rounded-[14px] p-5 flex flex-col items-center ' >
        <h1 className='text-purple-900 text-2xl font-bold my-3  ' >Get Things Done!</h1>
        <TodoForm addTodo ={addTodo} />
        {todos.map((todo, index) => (
            todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo} />
            ) : (
            <Todo task = {todo} key={index} 
            toggleComplete={toggleComplete}
            deleteTodo = {deleteTodo}
            editTodo={editTodo}
             />
            )


        ))}

    </div>
  )
}

export default TodoWrapper