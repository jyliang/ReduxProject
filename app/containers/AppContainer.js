import React, {Component } from 'react'
// trigger components down the line, take in the state and the acciton and will components we give
import {connect} from 'react-redux'
import {ActionCreators} from '../actions'
import {bindActionCreators} from 'redux'
import Home from './Home'

class AppContainer extends Component {
  addRecipe() {
    this.props.addRecipe();
  }

  render() {
    return <Home {...this.props} />

  }

}

//sending actions to the entire application
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

// This pulls in the 'addRecipe' functions
export default connect((state) => {
  return {}
}, mapDispatchToProps)(AppContainer);
