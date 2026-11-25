"use client"

import React, { useState } from "react"
import { useOptimistic } from "react"

interface Todo {
  id: number
  text: string
  isPending?: boolean
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos)
  const textInputRef = React.useRef<HTMLInputElement>(null)

  const handleAddTodo = async (newTodo: Todo) => {
    setOptimisticTodos([...todos, { ...newTodo, isPending: true }])

    try {
      const response = await mockApiCall(newTodo)
      if (response.success) {
        setTodos((prev) => [...prev, { ...newTodo, isPending: false }])
      } else {
        setTodos((prev) => prev)
      }
    } catch (error) {
      setTodos((prev) => prev)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-auto flex-row items-center justify-center space-x-4">
        <input type="text" ref={textInputRef} className=" text-black" />
        <button
          onClick={() =>
            handleAddTodo({
              id: Date.now(),
              text: textInputRef.current?.value || "",
            })
          }
        >
          Add Todo
        </button>
      </div>
      <ul className="mt-4 list-disc">
        {optimisticTodos.map((todo) => (
          <li
            key={todo.id}
            className={`list-item text-left ${
              todo.isPending ? " opacity-50" : ""
            }`}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

const mockApiCall = (
  newTodo: Todo
): Promise<{ success: boolean; todo: Todo }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true, todo: newTodo })
    }, 1000)
  })
}

export default TodoApp
