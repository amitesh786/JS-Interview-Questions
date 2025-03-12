// What issue exists in this implementation, and how can you fix it?

function Timer() {
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    }, []);
  
    return <p>Seconds: {seconds}</p>;
}
