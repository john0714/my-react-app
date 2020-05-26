import React,{ useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { PATH } from './config'

function List({finished}) {

  const todoList = useSelector(state => state.todoList)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(PATH + 'todos').then(res => {
      dispatch({
        type:'SET_TODO_LIST',
        payload: res.data
      })
    })
  },[])

  const toggleTodo = (todo) =>{
    //トグル処理の実装
    const newTodo = {
      ...todo,
      checked: !todo.checked
    }
    axios.put(PATH + 'todo/' + todo.id, newTodo).then(() => {
      dispatch({
        type:'TOGGLE_TODO',
        payload: todo.id
      })
    })
  }

  return (
    <ul className="list">
    {todoList.filter(todo => todo.checked === finished).map((todo,i) => (
      <li key={todo.id}>
        <p>{todo.title}</p>
        <button type="button" onClick={()=>toggleTodo(todo)} >
          {todo.checked?"再開":"終了"}
        </button>
        <Link to={`delete/${todo.id}`}>削除</Link>
        <Link to={`edit/${todo.id}`}>編集</Link>
      </li>
    ))}
    </ul>
  );
}
export default List