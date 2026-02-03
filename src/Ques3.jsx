import { useState } from "react";
function Ques3() {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <h2>Theme Toggle SPA</h2>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}
export default Ques3;
