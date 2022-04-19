import createSore from "../libraries/createStore";

const appState = {
  themeColor: 'red'
}
function reducer(state, action) {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createSore(appState, reducer)
export default store