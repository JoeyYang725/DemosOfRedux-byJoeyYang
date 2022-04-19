import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import connect from '../libraries/my-react-redux';
import connect from '../connect';


class ThemeSwitch extends Component {
  static contextTypes = {
    themeColor: PropTypes.string,
    onSwitchColor: PropTypes.func
  }
  changeThemeColor(color) {
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color)
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.changeThemeColor.bind(this, 'green')} style={{ color: this.props.themeColor }}>green</button>
        <button onClick={this.changeThemeColor.bind(this, 'blue')} style={{ color: this.props.themeColor }}>blue</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }
  }
}
ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)
export default ThemeSwitch