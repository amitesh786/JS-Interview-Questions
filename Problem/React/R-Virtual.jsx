// What happens to the <p>Even</p> element in the DOM when the count is incremented from 0 to 1? 
// Explain React's reconciliation process.

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        {count % 2 === 0 && <p>Even</p>}
        </div>
    );
}
