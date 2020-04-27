import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header'
import List from './List'
import Form from './Form'
import Delete from './Delete' 
import Edit from './Edit'

function App() {
  // List의 내용을 State로 관리
  const [items, changeItem] = useState([
    {
      title:'Reactのインストール',
      checked:true
    },{
      title:'JSXを学ぶ',
      checked:true
    },{
      title:'コンポーネントの分離',
      checked:false
    },{
      title:'演習',
      checked:false
    }
  ])

  const deleteTodo = (key) => {
    const newItems = items.filter((_,_key) => _key !== key)
    changeItem(newItems)
  }

  const editTodo = (key, todo) => {
    const newItems = items.map((_todo, _key) => _key === key ? {
      ..._todo,
      title: todo
    } : _todo)
    changeItem(newItems)
  }

  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/'><List finished={false}/></Route>
        <Route exact path='/finished>'><List finished={true}/></Route>
        <Route exact path='/add'><Form /></Route>
        <Route exact path='/delete/:key'><Delete items={items} deleteTodo={deleteTodo} /></Route>
        <Route exact path='/edit/:key'><Edit items={items} editTodo={editTodo}/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App; 