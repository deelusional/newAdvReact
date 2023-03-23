import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState(28))
  // const value = useState('Hello Asshat')[0];
  // const func = useState('Hello Dickhead')[1];
  // console.log(value);
  // console.log(func);
  // Destructuring is better

  const [count, setCount] = useState(0);
  
  const handleClick = () => { 
    setCount(count +1);
  };
  return (
    <div>
      <h2>useState basics</h2>
        <h3>You clicked {count} times</h3>
          <button type="button" className="btn" onClick={handleClick}>
            Click This Here
          </button>
    </div>
  );
};

export default UseStateBasics;
