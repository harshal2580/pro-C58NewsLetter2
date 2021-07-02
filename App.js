import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import HoroScope from './screens/HoroScope'
import JokeScreen from './screens/JokeScreen'
import NewsScreen from './screens/NewsScreen'
import WeatherScreen from './screens/WeatherScreen'

import { createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return(
     <View> 
      
      <AppContainer/>
     </View> 
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  HoroScope:HoroScope,
  JokeScreen:JokeScreen,
  NewsScreen:NewsScreen,
  WeatherScreen:WeatherScreen
})

const AppContainer = createAppContainer(AppNavigator)