import { useState } from 'react';

const BasicHook = () => {
  const [count, setCount] = useState(0);

  let count2 = 0;
  
  const handleClick = () => {
    setCount(count + 1);

    count2 = count2 + 1;
  }
  
  return (
    <div>
      <p> Count: {count} </p>
      <p> Count2: {count2} </p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default BasicHook;