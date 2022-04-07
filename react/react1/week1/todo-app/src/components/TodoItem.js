
export function TodoItem(props) {
  return(
    <li className="todo-item">
      {props.description}, {props.deadline}
    </li>
  )
}