import React, { useContext, useState } from 'react'
import TodoContext from '../app-data/TodoContext'


const Form = () => {

  const todo={
    title:'',
    description:'',
    completed:false
  }

  const{createToDo}=useContext(TodoContext)
  const[todoTitle,setTodoTitle]=useState('')
  const[completed,setCompleted]=useState(false)



  const handleChange=(e)=>{
    
      const {target:{value,type,checked,name}}=e
      console.log(checked);
      if(type==='text')
      {
        [name]=value
      }
      //setTodoTitle(value)
      if(type==='checkbox')setCompleted(checked)
     
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    createToDo({
      title:todoTitle,
      completed
    })
    setTodoTitle('')
    setCompleted(false)
    
  }

  


  return (
    <form >
        <p className="h3 text-light text-center">Create a new Task to do</p>
        <label htmlFor="title" className="form-label text-light pt-2">Título del To Do</label>
        <input type="text" name="todoTitle" id="title" className="form-control " onChange={handleChange} value={todoTitle} />
        
        <label htmlFor="desc" className='form-label text-light'>Description</label>
        <textarea id="desc" name="description" className='form-control' rows="5" value={todo.description}/>

        <label htmlFor="img" className="form-label text-light">Imagen</label>
        <input type="file" id="img" name="file" className='form-control' />

        <div className="form-check form-switch m-2 text-light w-100">
          <input id="completed" type="checkbox"className='form-check-input' onChange={handleChange} name="completed" checked={completed} />
          <label htmlFor="completed">{completed?'Completa':'Incompleta'}</label>
        </div>



        <button type="submit" onClick={handleSubmit} className="btn m-4 w-100 mx-auto btn-dark text-light" >Crear</button>
       
    </form>
  )
}

export default Form