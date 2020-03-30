import React, { useState } from 'react';
import Header from './Header'
import List from './List'
import Form from './Form'

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

  const addTodo = (title) => {
    const newItem = {
      title,
      checked:false
    }
    changeItem([...items,newItem])
  }

  const toggleTodo = (key) =>{
    const newItems = items.map((item,_key) => {
      if(_key === key){
        return {
          ...item,
          checked: !item.checked
        }
      }
      return item
    })
    changeItem(newItems)
  }

  return (
  <>
  <Header />
    <List items={items} toggleTodo={toggleTodo}/> 
    <Form addTodo={addTodo}/>
  </>
  );
}

export default App; 