// What is the output of below code:

const App = () => {
    const [counter, setCounter] = useState(5);
    return (
        <>
            <span>{counter}</span>
            <button
                onClick={() => {
                setCounter(counter + 5);
                setCounter(counter + 5);
                alert(counter);
                setCounter(counter + 5);
                setCounter(counter + 5);
                }}
            >
                Increment
            </button>
        </>
    );
};
export default App;

// A: Alert with 5, 5
// B: Alert with 15, 25
// C: Alert with 5, 10
// D: Error: Cannot update the same state multiple times concurrently

// Multiple setCounter(counter + 5) calls within the same event handler 
// do not increment sequentially due to React’s batching behavior.
// alert(counter); displays the old state value (5) instead of the updated one.
// The actual state update happens only once, so counter goes from 5 to 10,

