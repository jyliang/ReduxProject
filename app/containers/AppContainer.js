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
  constructor(props) {
    super(props)
    this.state = { recipeCount : 0 }

  }

  incrementRecipeCount () {
    // this.recipeCount = this.recipeCount + 1
    this.setState({recipeCount: this.state.recipeCount + 1});

  }

  render() {
    return <View>
    <Text style= {{marginTop: 20}}>
    container, count : {this.state.recipeCount}
    </Text>
    <TouchableHighlight onPress= {() => {this.incrementRecipeCount()}}>
    <Text>Add</Text>
    </TouchableHighlight>
    </View>

  }

}

//sending actions to the entire application
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => {return {}}, mapDispatchToProps)(AppContainer)
