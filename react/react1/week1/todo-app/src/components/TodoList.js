import { TodoItem } from "./TodoItem";

export function TodoList(props) {
  return(
    <ul>
      {props.todoList.map(todo=>{
        return <TodoItem description={todo.description} deadline={todo.deadline}/>
      })}
    </ul>
  )
}