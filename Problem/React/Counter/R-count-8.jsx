// What is the output of below code:

const App = () => {
    const [counter, setCounter] = useState(5);
    return (
        <>
            <span>{counter}</span>
            <button onClick={() => {
                setCounter(counter => counter + 5);
                setCounter(counter => counter + 5);
                alert(counter);
                setCounter(counter => counter + 5);
                setCounter(counter => counter + 5);
            }}>Increment</button>
        </>
    );
};
export default App;

// A: Alert with 5, 25
// B: Alert with 5, 10
// C: Alert with 15, 25
// D: Alert with 15, 10

// React queues all the updater functions(e.g, counter => counter + 5)
// which will be processed after all the code inside event handler has been executed. 

// During the next re-render(state update through setState), React goes through the queue and

// increment the counter based on the previous value in each function call. So the final value 
// of counter becomes 25(initial value 5 + 5 + 5 + 5 + 5) whereas the alert shows 
// default value 5 because the counter value won't be updated by that time.
