import { useState, type FC } from "react";

function heavyCalculation() {
  console.log('heavy calculation')
  return Array.from({ length: 10_000_000 }, (_, i) => i)
    .reduce((acc, val) => acc + val, 0)
}

export const Counter: FC = () => {
  const [count, setCount] = useState(() => heavyCalculation())

  const handleClick = () => {
    setCount(count + 1)
    console.log(count);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}