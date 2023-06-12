import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import NavBar from './components/NavBar'
import Main from './components/Main'
import {TodoProvider} from './app-data/TodoContext'


function App() {
 

  return (
    <TodoProvider>
      <NavBar/>
      <Main/>
    </TodoProvider>
  )
}

export default App
