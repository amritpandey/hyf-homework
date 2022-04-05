import { useState, useEffect } from 'react';
import { TodoItem } from './TodoItem';
import './App.css';

const API_URL =
    'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw';

const TodoList = () => {
    //controlled inputs
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');

    // main useState
    const [todoData, setTodoData] = useState([]);

    //checking empty description/deadline
    const [emptyDesc, setEmptyDesc] = useState('');
    const [emptyDate, setEmptyDate] = useState('');

    const onChange = (e) => {
        setDesc(e.target.value);
    };

    const onChangeDate = (e) => {
        const value = e.target.value;
        setDate(value);
    };

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((result) => {
                if (setTodoData) {
                    const value = result.map((info) => ({
                        id: info.id,
                        description: info.description,
                        date: info.deadline,
                    }));
                    setTodoData((prevTodo) => {
                        return [...prevTodo, ...value];
                    });
                }
            });
    }, [setTodoData]);

    // adding new todo
    const addTodo = () => {
        setEmptyDesc('');
        setEmptyDate('');

        if (desc !== '') {
            checkDate();
            if (emptyDate !== 'Empty date') {
                const newTodo = {
                    id: new Date().getTime(),
                    description: desc,
                    date: date,
                };

                setTodoData((prevTodo) => {
                    return [...prevTodo, newTodo];
                });
            }
        } else {
            if (emptyDesc === '') {
                setEmptyDesc('Empty Description');
            }
            if (emptyDate === '') {
                setEmptyDate('Empty date');
            }
        }
    };

    //checking if the date is before than today
    function checkDate() {
        if (date !== '') {
            const provideDate = new Date(date).getTime();
            const currentDate = new Date().getTime();
            
            if (provideDate < currentDate) {
                setEmptyDate("Deadline can't be passed date");
                
            }
        } else {
            setEmptyDate('Empty date');
        }
    }

    //delete function
    const handleDelete = (a) => {
        setTodoData((prevValue) => prevValue.filter((todo) => todo.id !== a));
    };

    //handle update function
    const updateDescription = (id, description) => {
        const updatedDescription = [...todoData].map((todo) => {
            if (todo.id === id) {
                todo.description = description;
            }
            return todo;
        });
        setTodoData(updatedDescription);
    };

    // fancy border
    function FancyBorder({ children }) {
        return <div className="fancy-border">{children}</div>;
    }

    const todoItems = todoData.map((todo) => {
        return (
            <FancyBorder>
                <TodoItem
                    id={todo.id}
                    description={todo.description}
                    deadline={todo.date}
                    handleDelete={handleDelete}
                    updateDescription={updateDescription}
                    key={todo.id}
                />
            </FancyBorder>
        );
    });

    return (
        <div>
            Todo description
            <input type="text" value={desc} onChange={onChange} />
            <br />
            Deadline
            <input
                type="date"
                value={date}
                onChange={onChangeDate}
                //onChange={(e) => setDate(e.target.value)}
            />
            <div>
                {emptyDesc} {emptyDate}
            </div>
            <br />
            <button onClick={addTodo}>Add todo</button>
            {todoItems}
        </div>
    );
};

export default TodoList;
