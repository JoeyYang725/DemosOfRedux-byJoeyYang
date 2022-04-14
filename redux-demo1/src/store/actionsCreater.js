export function visibilityFilterCreater(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export function completedCreater(index, completed) {
  return {
    type: 'SET_ITEM_COMPLETED',
    index,
    completed
  }
}

export function addTodoCreater(text) {
  return {
    type: 'ADD_ITEM',
    text
  }
}