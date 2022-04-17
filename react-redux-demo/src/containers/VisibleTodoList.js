import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

//辅助函数，为了简化自己的理解，直接放到map方法里
// const getVisibleTodos = (todos, filter) => {
//   if (filter === "SHOW_ALL") {
//     return todos
//   } else if (filter === "SHOW_COMPLETED") {
//     return todos.filter(todo => todo.completed)
//   } else if (filter === "SHOW_ACTIVE") {
//     return todos.filter(todo => !todo.completed)
//   }
// }

//把state中的todos和visibilityFilter，映射到展示组件
const mapStateToProps = state => {
  return {
    //返回组件内需要的prop
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
    todos: (() => {
      if (state.visibilityFilter === "SHOW_ALL") {
        return state.todos
      } else if (state.visibilityFilter === "SHOW_COMPLETED") {
        console.log(state)
        return state.todos.filter(todo => todo.completed)
      } else if (state.visibilityFilter === "SHOW_ACTIVE") {
        return state.todos.filter(todo => !todo.completed)
      }
    })()
  }
}

//把dispatch映射到展示组件的回调中
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      //与普通的redux dispatch相同，传入action
      dispatch(toggleTodo(id))
    }
  }
}

//connect传入的参数是mapDispatch和mapState,返回一个函数，该函数接受展示组件作为参数
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList