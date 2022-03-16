import './App.css';
import { TodoList } from './components/TodoList';
import Header from './components/Header';
import { todoListArray } from './components/TodoListArray';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header />
                 <TodoList todoList={todoListArray} />
            </header>
        </div>
    );
}

export default App;
