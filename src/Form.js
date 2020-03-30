import React,{useState} from 'react'
function Form({addTodo}) {
 const [myText , changeMyText] = useState('')

 const handleSave = () => {
  if(!myText) return

    addTodo(myText)
    changeMyText('')
  }

  return (
    <div className="form">
    <label htmlFor="text">追加:</label>
    <input
      type="text"
      id="text"
      value={myText}
      onChange={e=>changeMyText(e.currentTarget.value)}
    />
    <input type="button" value="追加" onClick={handleSave}/>
  </div>
  );
}

export default Form 