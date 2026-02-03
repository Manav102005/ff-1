import { useState } from "react";
function Ques1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter SPA</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>{" "}
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
1;
export default Ques1;
