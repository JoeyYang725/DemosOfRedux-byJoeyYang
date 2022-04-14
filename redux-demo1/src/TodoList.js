import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Checkbox, Input, Button } from 'antd';

import store from './store'
import { visibilityFilterCreater, addTodoCreater, completedCreater } from './store/actionsCreater'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: {
        ...store.getState(),
      },
      inputValue: ''
    }
    this.changeInputValue = this.changeInputValue.bind(this)
    this.addTodo = this.addTodo.bind(this)
    store.subscribe(this.storeChange.bind(this))
  }
  storeChange() {
    this.setState({
      store: {
        ...store.getState()
      }
    })
  }
  addTodo() {

    console.log(this.state)
    store.dispatch(addTodoCreater(this.state.inputValue))
  }
  changeComplete(index, item) {
    console.log(item, index)
    store.dispatch(completedCreater(index, !item.completed))
  }
  changeInputValue(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  render() {
    return (
      <Fragment>
        <div>
          <Input onChange={this.changeInputValue} style={{ width: "200px", margin: "20px" }}></Input>
          <Button onClick={this.addTodo} type='primary'>增加</Button>
        </div>
        <div>
          <ul>
            {this.state.store.list.map((item, index) => {
              return <Checkbox key={index} onChange={this.changeComplete.bind(this, index, item)} checked={item.completed}>{item.text}</Checkbox>
            })}
          </ul>
        </div>
      </Fragment>
    )
  }
}
export default TodoList