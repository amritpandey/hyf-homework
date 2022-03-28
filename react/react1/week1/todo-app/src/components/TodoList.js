import { TodoItem } from './TodoItem';
import { TodoListArray } from './TodoListArray';

const todoList = TodoListArray();

export function TodoList() {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Todo List</h1>
            <ul>
                {todoList.map((todo) => {
                    return (
                        <TodoItem
                            description={todo.description}
                            deadline={todo.deadline}
                            key={todo.id}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
