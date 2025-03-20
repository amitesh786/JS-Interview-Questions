// What will be the output when clicking the "Increment" button, 
// and why? How can you fix the issue?

function App() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
        setCount(count + 1);
    }

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        </div>
    );
}
