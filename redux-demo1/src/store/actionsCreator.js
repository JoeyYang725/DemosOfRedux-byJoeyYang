export function visibilityFilterCreator(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export function completedCreator(index, completed) {
  return {
    type: 'SET_ITEM_COMPLETED',
    index,
    completed
  }
}

export function addTodoCreator(text) {
  return {
    type: 'ADD_ITEM',
    text
  }
}