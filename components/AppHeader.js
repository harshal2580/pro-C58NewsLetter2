import * as React from 'react';
import { View, Text } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return(
      <View>
       <Text style={{
        color:'white',
        fontSize:30, 
        textAlign:'center',
        backgroundColor:'blue',
        marginTop:30
        }}>News Letter 1</Text>
      </View>
    );
  }
}