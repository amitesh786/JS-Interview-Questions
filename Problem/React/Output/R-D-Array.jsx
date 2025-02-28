
const App = () => {
    const [text, setText] = React.useState("Hello");

    React.useEffect(() => {
        console.log("Effect runs:", text);
    }, []);

    return (
        <div>
        <button onClick={() => setText("World")}>Change Text</button>
        </div>
    );
};
  
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  
// Options:
// A) "Effect runs: Hello" on mount and "Effect runs: World" on click
// B) "Effect runs: Hello" only on mount
// C) Nothing will be logged
// D) "Effect runs: Hello" every time the button is clicked

// Explanation

// The useEffect hook has an empty dependency array ([]), 
// which means it only runs once, when the component mounts.

// Inside useEffect, console.log("Effect runs:", text); 
// logs the initial state (text = "Hello").

// Clicking the button updates the text state to "World", 
// but since the effect does not depend on text (and it only runs once on mount),
// it does not re-run.

// As a result, only one log appears in the console:
// Effect runs: Hello

// Since useEffect does not run on state updates (because of the empty dependency array),
//  it never logs "Effect runs: World".
