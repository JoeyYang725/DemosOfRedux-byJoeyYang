import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Checkbox, Input, Button } from 'antd';

import store from './store'
import { visibilityFilterCreator, addTodoCreator, completedCreator } from './store/actionsCreator'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stateFromStore: {
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
      stateFromStore: {
        ...store.getState()
      }
    })
  }
  addTodo() {
    store.dispatch(addTodoCreator(this.state.inputValue))
    this.setState({
      inputValue: ''
    })
  }
  changeComplete(index, item) {
    console.log(item, index)
    store.dispatch(completedCreator(index, !item.completed))
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
          <Input value={this.state.inputValue} onChange={this.changeInputValue} style={{ width: "200px", margin: "20px" }}></Input>
          <Button onClick={this.addTodo} type='primary'>增加</Button>
        </div>
        <div>
          <ul>
            {this.state.stateFromStore.list.map((item, index) => {
              return <Checkbox key={index} onChange={this.changeComplete.bind(this, index, item)} checked={item.completed}>{item.text}</Checkbox>
            })}
          </ul>
        </div>
      </Fragment>
    )
  }
}
export default TodoList