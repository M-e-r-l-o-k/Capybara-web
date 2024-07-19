// import libs:
import React, {useState} from "react";

function isPrime(n) {
    let i = 2;
    while (i * i <= n) {
        if (n % i == 0) return 0;
        i++;
    }
    return 1;
}

function toPrime(n) {
    while (isPrime(n) == false) n++;
    return n;
}

const Game = () => {
    const [count, setCount] = useState(2);
    
    return (
        <div>
            <button onClick={() => setCount(toPrime(count + 1))}>
                Следующее простое число
            </button>
            <h1>Prime number: {count}</h1>
        </div>
    );
};

export default Game;