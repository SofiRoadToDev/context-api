import { createContext,useReducer } from 'react';
import { initialToDoState, todoReducer } from './TodoReducer';
import {ActionCreators, TYPES} from '../app-data/TodoActionTypes'

const TodoContext=createContext()

const url='http://localhost:3000/api/'


const TodoProvider = ({children}) => {

const [state,dispatch]=useReducer(todoReducer,initialToDoState)

const {todoList,error}=state;

const fetchToDos= async () => {
 
  const res= await fetch(url)
  if(res.ok){
    return await res.json()
  }else{
    throw new Error(` Error: ${error.statustext}`)
  }
 
}




const fillToDoList=async()=>{
  try {
    const res=  await fetchToDos()
    dispatch({type:TYPES.GET_ALL,payload:res.slice(0,9)})
  } catch (error) {
    dispatch({type:TYPES.SET_ERROR,payload:error})
  }
}

const createToDo=(toDo)=>{
  dispatch({type:TYPES.ADD,payload:toDo})
}



    const data={
        todoList,
        fillToDoList,
        createToDo
    }
  
    return (
    <TodoContext.Provider value={data}>{children}</TodoContext.Provider>
  )
}

export  {TodoProvider};
export default TodoContext;