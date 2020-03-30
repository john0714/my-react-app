import React from 'react'

function List({items,toggleTodo}) {
  return (
  <ul className="list">
    {items.map((item,i) => (
      <li
        key={i}
        onClick={()=>toggleTodo(i)}
      >{item.checked?<del>{item.title}</del>:item.title}</li>
    ))}
  </ul>
  );
}

export default List 