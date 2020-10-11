import React, { useState } from 'react'

export default function Counter() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1)
    }
  }
  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 2)}>
        + 1
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-1</button>
      <button onClick={incrementFive}>+5</button>
    </div>
  )
}
