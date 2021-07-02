import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config'

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state={
      like:0,
      dislike:0
    }
  }

  likeCount = () => {
    this.setState({like:this.state.like+1})
  }

  dislikeCount = () => {
    this.setState({dislike:this.state.dislike+1})
  }

  likePressed() {
    var like=db.ref('Rating/'+'/');
    like.update({
      'likePressed':1
    })
  }

  dislikePressed() {
    var dislike=db.ref('Rating/'+'/');
    dislike.update({
      'dislikePressed':1
    })
  }

  render() {
    return(
      <View>
      <AppHeader/>
       <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.buttonsContainer}
         onPress={() => this.props.navigation.navigate('JokeScreen')}>
        
         <Text style={{fontSize:20}}>Read a Joke</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonsContainer}
         onPress={() => this.props.navigation.navigate('HoroScope')}>
        
         <Text style={{fontSize:20}}>Horoscope</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonsContainer}
         onPress={() => this.props.navigation.navigate('WeatherScreen')}>
        
         <Text style={{fontSize:20}}>Weather</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonsContainer}
         onPress={() => this.props.navigation.navigate('NewsScreen')}>
        
         <Text style={{fontSize:20}}>Top News</Text>
        </TouchableOpacity>

       <View>
        <Text style={{
          textAlign:'center',
          marginTop:50,
          fontFamily:'Calibri Math',
          fontSize:28,
          marginLeft:-30
          }}>Rate us</Text>
        <TouchableOpacity onPress={this.likePressed}>
         <Image
          style={{width:50, height:50, marginLeft:100, marginTop:50}}
          source={require('../assets/thumbsup.png')}
         />
        </TouchableOpacity>
         
        <TouchableOpacity onPress={this.dislikePressed}>
         <Image
          style={{width:50, borderColor:'black', height:50, marginLeft:180, marginTop:-30}}
          source={require('../assets/thumbsdown.png')}
         />
        </TouchableOpacity>
       </View>
       </View>

       <Text style={styles.likeText}>{this.state.like}</Text>
       <Text style={styles.dislikeText}>{this.state.dislike}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:50,
      marginLeft:80,
      borderRadius:15,
      borderColor:'black',
      borderWidth:2,
      width:200,
      height:50
  },
  likeText:{
    fontFamily:'Calibri Math',
    fontSize:30,
    marginTop:-110,
    marginLeft:120
  },
  dislikeText:{
    fontFamily:'Calibri Math',
    fontSize:30,
    marginTop:-30,
    marginLeft:190,
  }
})