const initialState = {
  todoList:[]
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_TODO_LIST':{
      return {
        todoList: action.payload
      }
    }

    case 'TOGGLE_TODO':{
      const newTodoList = state.todoList.map(todo => {
        if(todo.id === action.payload){
          return {
            ...todo,
            checked: !todo.checked
          }
        }
        return todo
      })

      return {
        todoList: newTodoList
      }
    }
    
    default:
      return state
  }
}