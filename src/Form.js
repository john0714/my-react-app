import React, { useState } from 'react';

function Form({list, changeList, reloadList}) { // App.jsでJSXで投入した値なので{}をつけてJSXにして使う
  const [tmpText, changeTmpText] = useState('ダミー')

  return(
    <div className="form">
      <label htmlFor="text">追加</label>
      <input itemType="text" id="text"
             value={tmpText}
             onChange={e=>changeTmpText(e.currentTarget.value)}
      />
      <button itemType="button"
        onClick={
          ()=> {
            list.push(tmpText)
            changeList(list)
            reloadList()
          }
        }
      >追加</button>
    </div>
  );
}

export default Form;