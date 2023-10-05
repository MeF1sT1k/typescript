import { useState } from 'react';
import classes from "./Counter.module.scss";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    };

    const decrement = () => {
        setCount(count - 1)
    };

    return (
        <div className={classes.counter}>
            <h1>{count}</h1>
            <div className={classes.buttons}>
                <button
                    className={classes.decrement}
                    onClick={decrement}>
                    Decrement
                </button>
                <button
                    className={classes.increment}
                    onClick={increment}>
                    Increment
                </button>
            </div>
        </div>
    );
};
