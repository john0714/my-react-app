const initialState = {
  isFetchTodoList:false,
  togglingTodo:null,
  todoList:[]
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_TODO_LIST':{
      return {
        ...state,
        isFetchTodoList: true
      }
    }
    case 'SUCCESS_FETCH_TODO_LIST':{
      return {
        ...state,
        isFetchTodoList: false,
        todoList: action.payload
      }
    }
    case 'TOGGLE_TODO':{
      return {
        ...state,
        togglingTodo: action.payload
      }
    }
    case 'SUCCESS_TOGGLE_TODO':{
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
        ...state,
        todoList: newTodoList,
        togglingTodo:null
      }
    }

    default:
      return state
  }
}