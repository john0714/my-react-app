import React, { useState } from 'react';
import Form from "./Form";

function List() {
  const [checkedList] = useState(["Reactのインストール", "JSXを学ぶ"])
  const [list, changeList] = useState(["コンポーネント", "演習"])
  const [isEdited, changeEditFlag] = useState(true)

  const reloadList = () => {
    if(isEdited) {
      changeEditFlag(false)
    } else {
      changeEditFlag(true)
    }
  };

  return (
    <>
      {
        isEdited
        ?
          <ul className="list">
            {checkedList.map((item, i) => <li className="checked" key={i}> {item} </li>)}
            {list.map((item, i) => <li key={i}> {item} </li>)}
          </ul>
          :
          <ul className="list">
            {checkedList.map((item, i) => <li className="checked" key={i}> {item} </li>)}
            {list.map((item, i) => <li key={i}> {item} </li>)}
          </ul>
      }
      <Form
        list={list}
        changeList={changeList}
        reloadList={reloadList}
      />
    </>
  );
}

export default List;