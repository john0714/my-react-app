import React from 'react';

function List() {
  const checkedList = ["Reactのインストール", "JSXを学ぶ"];
  const list = ["コンポーネント", "演習"];

  return (
    <ul className="list">
      {checkedList.map((item, i) => <li className="checked" key={i}> {item} </li>)}
      {list.map((item, i) => <li key={i}> {item} </li>)}
    </ul>
  );
}

export default List;