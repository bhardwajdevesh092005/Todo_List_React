import { useContext, createContext } from "react";
export const TodoContext = createContext({
    todos:[
        {
            id:1,
            title:"Todo Msg",
            completed:false,
            edit:false,
        },  
    ],
    addTodo: (todo)=>{},
    remTodo: (id)=>{},
    updateTodo: (id,todo)=>{},
    toggleComplete: (id)=>{}
});
export const useTodo = ()=>{return useContext(TodoContext)};
export const TodoProvider = TodoContext.Provider;