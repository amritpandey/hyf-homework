import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setCount((prev) => prev + 1);
        }, 1000);
        return () => clearTimeout(timerId);
    });

    return (
        <div>
            <h3>You have used {count} seconds on this website</h3>
        </div>
    );
}

export default Counter;
