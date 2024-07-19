// import libs:
import React, {useState} from "react";

const Game = () => {
    const [count, setCount] = useState(200);
    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Увеличить значение на 1
            </button>
            <h1>Count: {count}</h1>
        </div>
    );
};

export default Game;