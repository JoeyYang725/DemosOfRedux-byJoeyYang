import React from 'react'
import { createRoot } from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import TodoApp from './reducers'
import App from './components/App'


//直接在index文件中创建store
let store = createStore(TodoApp)

createRoot(document.getElementById('root')).render(<Provider store={store}>
  <App></App>
</Provider>)