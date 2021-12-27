import React, { useState, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `${name} has clicked ${count} times!`;

    return () => {
      console.log("Clean up");
      //componentWillUnmount
    };
  }, [count]);

  return (
    <React.Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <div>
        {name} has clicked {count} times!
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </React.Fragment>
  );
}

export default Counter;
