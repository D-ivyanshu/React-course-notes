
interface CounterProps {
    count : number;
    onIncrement : () => void;
    onDecrement : () => void;
    onMulitply : () => void;
}

function Counter ({count, onIncrement, onDecrement, onMulitply} : CounterProps) {
    return (
        <>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={onMulitply}>*</button>
        </>
    );
}

export default Counter;