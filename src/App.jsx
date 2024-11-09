import "./App.css"
import { useRef, useState } from "react";
import Todoinsert from "./components/Todoinsert"
import TodoList from "./components/TodoList"

function App() {
  // 로직구현
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "공부",
      checked: true,
    },
    {
      id: 2,
      text: "운동",
      checked: true,
    },
    {
      id: 3,
      text: "취미",
      checked: false,
    },
  ])

  const nextId = useRef(4)

  const onInsert = (text) => {
    setTodos(
      todos.concat([{
        id: nextId.current,
        text: text,
        checked: false,
      }])
    )
    nextId.current++
  }

  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const onToggle = (id) => {
    setTodos (
      todos.map(todo => 
        todo.id === id ? {...todo, checked: !todo.checked}:todo 
      )
    )
  }
  // view 구역
  return (
    <div>
      <Todoinsert onInsert={onInsert} />
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle}/>
    </div>
  )
}

export default App
