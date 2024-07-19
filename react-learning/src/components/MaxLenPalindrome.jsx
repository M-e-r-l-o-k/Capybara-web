// import libs:
import { useEffect } from "react";
import React, { useState } from "react";


const MaxLenPalindrome = () => {    
    const [value, setValue] = useState("");
    return (
        <div>

            <input onChange={(e) => setValue(e.target.value)}/>

            <h1>{value}</h1>
        </div>
    );
};

export default MaxLenPalindrome;