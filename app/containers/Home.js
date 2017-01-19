import React, { Component } from 'react'
import ReactNative from 'react-native'

import {connect} from 'react-redux'

const {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet
} = ReactNative

class Home extends Component {

  searchPressed() {
    this.props.fetchRecipes('garlic');
  }

  render() {
    return <View>
      <View style= {{marginTop:20}}>
        <TouchableHighlight onPress={() => this.searchPressed()} >
        <Text>
        search recipes
        </Text>
        </TouchableHighlight>
      </View>
      <ScrollView>

      </ScrollView>
    </View>

  }

}

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes
  };
}

export default connect(mapStateToProps)(Home);
