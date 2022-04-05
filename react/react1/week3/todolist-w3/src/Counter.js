import { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setCount((c) => c + 1);
        }, 1000);
        return () => clearTimeout(timerId);
    });
    return (
        <div>
            <h3>You have used {count} seconds.</h3>
        </div>
    );
};

export default Counter;
