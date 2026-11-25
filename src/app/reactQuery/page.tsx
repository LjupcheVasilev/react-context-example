"use client"
import React from "react"
import { useQuery, useMutation, useQueryClient } from "react-query"

interface Todo {
  id: number
  text: string
  isPending?: boolean
}

const todos = [{ id: 1, text: "first todo" }]

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await new Promise<{ success: boolean; todos: Todo[] }>(
    (resolve, reject) => {
      setTimeout(() => {
        resolve({
          success: true,
          todos: todos,
        })
      }, 1000)
    }
  )
  return response.todos
}

const addTodo = async (
  newTodo: Todo
): Promise<{ success: boolean; todo: Todo }> => {
  const response = await new Promise<{ success: boolean; todo: Todo }>(
    (resolve, reject) => {
      setTimeout(() => {
        reject({ success: false, todo: newTodo })
      }, 1000)
    }
  )

  return response
}

const TodoApp: React.FC = () => {
  const textInputRef = React.useRef<HTMLInputElement>(null)
  const queryClient = useQueryClient()
  const { data: todos = [] } = useQuery<Todo[]>("todos", fetchTodos)
  const mutation = useMutation({
    mutationFn: addTodo,
    onMutate: async (newTodo: Todo) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ["todos"] })

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData<Todo[]>("todos")

      // Optimistically update to the new value
      queryClient.setQueryData<Todo[]>(["todos"], (old) => [
        ...(old || []),
        { ...newTodo, isPending: true },
      ])
      return { previousTodos }
    },
    // If the mutation fails, use the context we returned above
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["todos"], context?.previousTodos)
    },
    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries({ queryKey: ["todos"] })
    },
  })

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-auto flex-row items-center justify-center space-x-4">
        <input type="text" ref={textInputRef} className=" text-black" />
        <button
          onClick={() =>
            mutation.mutate({
              id: Date.now(),
              text: textInputRef.current?.value || "",
            })
          }
        >
          Add Todo
        </button>
      </div>
      <ul className="mt-4 list-disc">
        {todos.map((todo) => (
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

export default TodoApp
