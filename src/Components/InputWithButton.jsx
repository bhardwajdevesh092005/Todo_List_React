import React, { useState } from 'react'
import { useTodo } from '../Contexts/TodoContexts'
function InputWithButton() {
    let {todos, addTodo,setTodos} = useTodo();
    const [heading,setHeading] = useState("");
    const handleAdd = ()=>{
        let new_todo = {
            id:Number(todos.length)+1,
            title:heading,
            completed:false,
            edit:false,
        }
        addTodo(new_todo);
        setHeading("");
        // console.log(todos);
    }
  return (
    <div className='flex'>
        <div>
            <input className='text-3xl rounded-l-xl self-center p-1 text-[#03030386]' value={heading} type="text" name="" id="" onChange={(e)=>{setHeading(e.target.value)}}/>
        </div>
        <div className='bg-green-600 h-fit p-1 text-white text-3xl rounded-r-xl'>
            <button onClick={handleAdd}>Add</button>
        </div>
    </div>
  )
}

export default InputWithButton