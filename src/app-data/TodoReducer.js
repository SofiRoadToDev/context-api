import {TYPES} from './TodoActionTypes'


export const initialToDoState={
    toDoList:[],
    error:null
}


export const todoReducer=(state,action)=>{

    const {type,payload}=action

    switch(type){
        case TYPES.GET_ALL:{
            
            const fetchedList=payload
            if(state.toDoList.length > 0 )
                return state
            else
            return {
                ...state,
                todoList:fetchedList
            }
        }

        case TYPES.ADD:{
            const newToDo= payload
            return {
                ...state,
                toDoList:[
                    ...state.toDoList,
                    newToDo
                ]                  
            }
        }

        case TYPES.DELETE:{
            const idToDo=payload
            return {
                ...state,
                toDoList:toDoList.filter(t => t.id !== idToDo)
            }
        }

        case TYPES.SET_DONE:{
            const idToDo=payload
            return {
                ...state,
                todoList:toDoList.map(t => t.id === idToDo ? t.status="DONE":t)
            }
        }

        case TYPES.SET_ERROR:{
            const err=payload
            return{
                ...state,
                error:{
                    ...state.err,
                    err
                }
            }
        }
        
        default: return state
    }
}
