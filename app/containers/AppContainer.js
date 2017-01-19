import React, {Component } from 'react'
import ReactNative from 'react-native'
// trigger components down the line, take in the state and the acciton and will components we give
import {connect} from 'react-redux'
import {ActionCreators} from '../actions'
import {bindActionCreators} from 'redux'

const {
  View,
  Text,
  TouchableHighlight,
} = ReactNative

class AppContainer extends Component {
  addRecipe() {
    this.props.addRecipe();
  }

  render() {
    return <View>
    <Text style= {{marginTop: 20}}>
    container, count : {this.props.recipeCount}
    </Text>
    <TouchableHighlight onPress= {() => {this.addRecipe()}}>
    <Text>Add</Text>
    </TouchableHighlight>
    </View>

  }

}

//sending actions to the entire application
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

// This pulls in the 'addRecipe' functions
export default connect((state) => {
  return {
    recipeCount : state.recipeCount
  }
}, mapDispatchToProps)(AppContainer);
