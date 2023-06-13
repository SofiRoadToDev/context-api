import React, { useContext, useState } from 'react'
import TodoContext from '../app-data/TodoContext'


const Form = () => {

  const Emptytodo={
    title:'',
    description:'',
    completed:false,
    image:null
  }

  const{createToDo}=useContext(TodoContext)
  const[todo,setTodo]=useState(Emptytodo)
  



  const handleChange=(e)=>{
    
      const {target:{value,type,checked,name,files}}=e
      console.log(checked);
      if(type==='text')
      {
        setTodo({
          ...todo,
          [name]:value
        })
        
      }
      if(type=='file'){
       if(files.length>0){
        const selectedFile=files[0]
        setTodo({
          ...todo,
          image:selectedFile
        })
       }
      }
      if(type=='textarea'){
        setTodo({
          ...todo,
          description:value
        })
      }
      
      if(type==='checkbox')
      setTodo({
        ...todo,
        completed:checked
      })
     
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    createToDo(todo)
    setTodo(Emptytodo)
   
    
  }

  


  return (
    <form >
        <p className="h3 text-light text-center">Create a new Task to do</p>
        <label htmlFor="title" className="form-label text-light pt-2">Título del To Do</label>
        <input type="text" name="title" id="title" className="form-control " onChange={handleChange} value={todo.title} />
        
        <label htmlFor="desc" className='form-label text-light'>Description</label>
        <textarea id="desc" name="description" className='form-control' rows="5" onChange={handleChange} value={todo.description}/>

        <label htmlFor="img" className="form-label text-light">Imagen</label>
        <input type="file" id="img" name="file" className='form-control ' onChange={handleChange} />

        <div className="form-check form-switch m-2 text-light w-100">
          <input id="completed" type="checkbox"className='form-check-input' onChange={handleChange} name="completed" checked={todo.completed} />
          <label htmlFor="completed">{todo.completed?'Completa':'Incompleta'}</label>
        </div>



        <button type="submit" onClick={handleSubmit} className="btn m-4 w-100 mx-auto btn-dark text-light" >Crear</button>
       
    </form>
  )
}

export default Form