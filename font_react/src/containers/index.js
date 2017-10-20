import React from 'react'
import { connect } from 'react-redux'
import {isOpen} from '../actions'
import AppBar from '../components/AppBar'

const mapStateToProps = (state) => {
  return {
    txt: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenClick:() => {
      dispatch({type: 'IS_OPEN'});
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar)
export default App