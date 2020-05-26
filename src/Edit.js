import React,{useEffect,useState} from 'react'
import { useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import { PATH } from './config'

function Edit() {

  const [todo, changeTodo] = useState(null)
  const [myText , changeMyText] = useState('')

  const { key } = useParams()
  const history = useHistory()

  useEffect(()=>{
    axios.get(PATH + 'todo/' + key).then(res => {
      changeTodo(res.data)
      changeMyText(res.data.title)
    })
  },[])


  const handleSave = () =>{
    if(!myText)return
    const newTodo = {
      ...todo,
      title: myText
    }
    axios.put(PATH + 'todo/' + key, newTodo).then(() => {
      history.push('/' + (todo.checked ? 'finished' : '' ))
    })

  }

  return (
    <div className="form">
      <label htmlFor="text">編集:</label>
      <input
        type="text"
        id="text"
        value={myText}
        onChange={e=>changeMyText(e.currentTarget.value)}
      />
      <input type="button" value="編集" onClick={handleSave}/>
    </div>
  );
}
export default Edit