import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'; 
import axios from 'axios'
import { PATH } from './config'

function List({finished}) {

  const [todoList, changeTodoList] = useState([])

  useEffect(() => {
    axios.get(PATH + 'todos').then(res => {
      changeTodoList(res.data);
    })
  }, [])

  const toggleTodo = () => {
    //トグル処理実装
  }

  return (
  <ul className="list">
    {
      todoList.filter(todo => todo.checked === finished).map((todo) => (
        <li key={todo.id}>
          <p>{todo.title}</p>
          <button type="button" onClick={toggleTodo} >
            {todo.checked?"再開":"終了"}
        </button>
        <Link to={`delete/${todo.key}`}>削除</Link>
        <Link to={`edit/${todo.key}`}>編集</Link>
        </li>
      ))
    }
  </ul>
  );
}

export default List 