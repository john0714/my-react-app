import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

function Edit({items, editTodo}) {
    const { key } = useParams();
    const history = useHistory();

    const targetTodo = items.find((_, _key) => _key === Number(key))

    const [myText, changeMyText] = useState(targetTodo.title)

    const handleSave = () => {
        if (!myText) return
        editTodo(Number(key), myText)
        history.push('/')
    }

    return (
        <div className='form'>
            <label htmlFor="text">編集</label>
            <input
                type="text"
                id="text"
                value={myText}
                onChange={e => changeMyText(e.currentTarget.value)}
            />
            <input type="button" value="編集" onClick={handleSave}/>
        </div>
    )
}
export default Edit