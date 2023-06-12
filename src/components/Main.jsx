import React, { useContext, useEffect } from 'react'
import Card from './Card'
import Form from './Form'
import TodoContext from '../app-data/TodoContext'

const Main = () => {

  const {todoList,fillToDoList}=useContext(TodoContext)
  

  const cardList= todoList?todoList.map(t=>(<Card key={t.id} ToDo={t}/>)):[]

  useEffect(()=>{
    fillToDoList()
     },[])

  return (
    <main className='container-fluid bg-secondary py-2 ' style={{minHeight:"800px"}}>
      <div className="row justify-content-around">
          <article className='col-8'>
            <div className="row justify-content-between">
              {cardList}
            </div>
              
          </article>
          <article className='col-3'>
            <Form/>
          </article>
      </div>
        
    </main>
  )
}

export default Main