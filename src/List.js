import React,{ useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { PATH } from './config'
import {fetchTodoListAction ,successFetchTodoListAction, toggleTodoAction, successToggleTodoAction} from './actions'


function List({finished}) {

  const todoList = useSelector(state => state.todoList)
  const isFetchTodoList = useSelector(state => state.isFetchTodoList)
  const togglingTodo = useSelector(state => state.togglingTodo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodoListAction())
    axios.get(PATH + 'todos').then(res => {
      dispatch(successFetchTodoListAction(res.data))
    })
  },[])

  const toggleTodo = (todo) =>{
    dispatch(toggleTodoAction(todo.id))
    //トグル処理の実装
    const newTodo = {
      ...todo,
      checked: !todo.checked
    }
    axios.put(PATH + 'todo/' + todo.id, newTodo).then(() => {
      dispatch(successToggleTodoAction(todo.id))
    })
  }
  
  if(isFetchTodoList){
    return <p>loading...</p>
  }

  return (
    <ul className="list">
    {todoList.filter(todo => todo.checked === finished).map((todo,i) => (
      <li key={todo.id}>
        <p>{todo.title}</p>
        <button type="button" onClick={()=>toggleTodo(todo)}
          disabled={togglingTodo===todo.id}
        >
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