import { connect } from "react-redux"
import { setVisibilityFilter } from '../actions'
import Link from "../components/Link"

//这个ownProps是什么？
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    onClick: () => {
      console.log('dispatch!!!')
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink