import React from 'react';

function Form() {
  return(
    <div className="form">
      <label htmlFor="text">追加</label>
      <input itemType="text" id="text" defaultValue="ダミー"/>
      <input itemType="button" defaultValue="追加"/>
    </div>
  );
}

export default Form;