import { combineReducers } from "redux"

const initState = {
  visibilityFilter: 'SHOW_ALL',
  list: [
    {
      text: "learn Redux",
      completed: false
    },
    {
      text: "read Redux Source code",
      completed: true
    },
    {
      text: "call",
      completed: false
    }
  ]
}
const visibilityFilter = function (state = initState.visibilityFilter, action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}

const list = function (state = initState.list, action) {
  const newList = Object.assign([], state)
  switch (action.type) {
    case 'SET_ITEM_COMPLETED':
      newList[action.index].completed = action.completed
      return newList
    case 'ADD_ITEM':
      console.log(newList)
      newList.push({ text: action.text, completed: false })
      return newList
    default:
      return state
  }
}
const reducer = combineReducers({
  visibilityFilter,
  list
})
export default reducer