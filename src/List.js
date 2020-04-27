import React from 'react'
import { Link } from 'react-router-dom'; 

function List({items, toggleTodo}) {
  return (
  <ul className="list">
    {
      items.map((item) => (
        <li key={item.key}>
        <button type="button" onClick={()=>toggleTodo(item.key)} >
          {item.checked?"再開":"終了"}
        </button>
        <Link to={`delete/${item.key}`}>削除</Link>
        <Link to={`edit/${item.key}`}>編集</Link>
        {item.title}
        </li>
      ))
    }
  </ul>
  );
}

export default List 