import React, { useState } from 'react'
import { useTodo } from '../Contexts/TodoContexts'
function TodoLabel({ todo }) {
  let {toggleComplete,updateTodo,remTodo} = useTodo();
  const [editable,setEditale] = useState(false);
  const [heading,setHeading] = useState(todo.title);
  const editTodo = ()=>{
    updateTodo(todo.id, {...todo,title:heading});
    setEditale(false);
  }
  const toggleDone = ()=>{
    toggleComplete(todo.id)
    console.log(todo);
  }
  const delet = ()=>{
    remTodo(todo.id);
  }
  return (
    <>
      <div className={`p-4 mt-2 rounded-xl flex ${!todo.completed?"bg-green-300":" bg-pink-500"}`}>
        <input className='mr-2' type="checkbox" onChange={toggleDone} name="" id="" />
        <input className = {` rounded-lg select-none p-1 text-2xl ${editable?"border-black border-2":"border-transparent"} ${!todo.completed?"bg-green-300 line-through text-slate-500":"bg-pink-500 text-black"}`} onChange={(e)=>setHeading(e.target.value)} type="text" value={heading} name="" id="" contentEditable={editable}/>
        <div className='p-1'>
          <img src={`${editable?"/src/Assets/Pencil.png":"/src/Assets/File.png"}`} className='w-10 h-10' alt="" onClick={()=>{setEditale((prev)=>!prev); console.log(editable);}}/>
        </div>
        <div className='p-1'>
          <img src="/src/Assets/Cancel.png" className='w-10 h-10' alt="" onClick={delet}/>
        </div>
      </div>
    </>
  )
}

export default TodoLabel