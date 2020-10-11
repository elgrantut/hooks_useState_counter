import React, { useState } from 'react'

export default function CounterThree() {
  const [items, setItems] = useState([])
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ])
  }
  return (
    <div className="container-fluid m-5">
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.value}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary my-2" onClick={addItem}>
        Add a Number
      </button>
    </div>
  )
}
