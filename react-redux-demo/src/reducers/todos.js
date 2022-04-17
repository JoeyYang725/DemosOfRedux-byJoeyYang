const todos = (state = [], action) => {
  const newState = [...state]
  switch (action.type) {
    case 'ADD_TODO':
      newState.push({ id: action.id, text: action.text, completed: false })
      return newState
    case 'TOGGLE_TODO':
      const completed = newState[action.id].completed
      console.log(completed, 'completed')
      newState[action.id].completed = !completed
      return newState
    default:
      return state
  }
}

export default todos