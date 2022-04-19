import React, { Component } from 'react'
import PropTypes from 'prop-types';
import connect from '../connect';

class Header extends Component {
  static contextTypes = {
    themeColor: PropTypes.string
  }
  // componentDidMount() {
  //   const { store } = this.context
  //   store.subscribe(this._updateThemeColor.bind(this))
  //   this._updateThemeColor()

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
      <div style={{ color: this.props.themeColor }}>this is a Header</div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Header = connect(mapStateToProps)(Header)
export default Header