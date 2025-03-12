// Why does the List component re-render even though items remain unchanged? 
// How can you prevent this unnecessary re-render?

const List = ({ items }) => {
    console.log("List component rendered");
    return (
        <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    );
};

export default function App() {
    const [count, setCount] = useState(0);
    const items = ["Apple", "Banana", "Cherry"];

    return (
        <div>
        <button onClick={() => setCount(count + 1)}>Re-render</button>
        <List items={items} />
        </div>
    );
} 
