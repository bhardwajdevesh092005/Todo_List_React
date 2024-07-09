import { useState,useEffect } from 'react'
import './App.css'
import { TodoProvider } from './Contexts/TodoContexts'
import InputWithButton from './Components/InputWithButton'
import TodoLabel from './Components/TodoLabel'
function App() {
    let [todos,setTodos] = useState([]);
    const addTodo = (new_todo)=>{
        setTodos((prev)=>([new_todo,...prev]));
        // console.log(todos);
    };
    const remTodo = (id)=>{
        setTodos((prev)=>(
            prev.filter((el)=>{return id !== el.id})
        ))
    };
    const updateTodo = (id,todo)=>{
        setTodos((prev)=>{
            prev.map((e)=>{e.id === id?todo:e});
        })
    };
    const toggleComplete = (id)=>{
        setTodos((prev)=>(
            prev.map((elem)=>(id === elem.id?{...elem,completed:!elem.completed}:elem))
        ))
    }

    useEffect(()=>{
        let tod = [];
        if(localStorage.getItem("todolist")!=undefined)
        {
            tod = JSON.parse(localStorage.getItem("todolist"));
        }
        setTodos(tod);
    },[]);
    
    useEffect(()=>{
        localStorage.setItem("todolist",JSON.stringify(todos));
        // console.log("stored");
    },[todos]);
    return(
        <div className='bg-[#030303b7] h-screen w-screen justify-center flex p-12'>
            <TodoProvider value={{todos,addTodo,remTodo,updateTodo,toggleComplete,setTodos}}>
                <div className='flex flex-col' id='main'>
                    <div className='text-center text-3xl mb-3'>Manage Your Todos</div>
                    <InputWithButton/>  
                    {todos.map((elem)=>(
                        <div key={elem.id}>
                            <TodoLabel todo={elem}/>
                        </div>
                    ))}
                </div>
            </TodoProvider>
        </div>
    )
}

export default App
