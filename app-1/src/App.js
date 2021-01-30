import React, { useState } from 'react'
import List from './List'
import AddTodo from './AddTodo'

function App() {
  const [todos, setTodo] = useState([])

  function addTodo(item) {
    const newTodos = [...todos, item]
    setTodo(newTodos)
  }

  return (
    <div>
      <AddTodo addTodo={addTodo}/>
      <List list={todos}/>
    </div>
  )
}

export default App