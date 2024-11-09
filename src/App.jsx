import "./App.css"
import { useState } from "react";
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

  const onInsert = () => {
    setTodos(
      todos.concat({
        id: 4,
        text: "입력테스트",
        checked: false,
      })
    )
  }
  // view 구역
  return (
    <div>
      <Todoinsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
