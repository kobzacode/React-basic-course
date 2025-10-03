import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0)

    return (
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    );
}