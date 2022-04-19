import React, { Component } from 'react';
import ThemeSwitch from './ThemeSwitch';
import PropTypes from 'prop-types';
// import connect from '../libraries/my-react-redux';
import connect from '../connect';


class Content extends Component {
  static contextTypes = {
    themeColor: PropTypes.string

  }
  constructor(props) {
    super(props)
    this.state = {
      themeColor: ''
    }
  }
  // componentDidMount() {
  //   const { store } = this.context
  //   this._updateThemeColor()
  //   store.subscribe(this._updateThemeColor.bind(this))

  // }
  // _updateThemeColor() {
  //   const { store } = this.context
  //   const appState = store.getState()
  //   this.setState({
  //     themeColor: appState.themeColor
  //   })
  // }
  render() {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>this is content</p>
        <ThemeSwitch />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Content = connect(mapStateToProps)(Content)
export default Content