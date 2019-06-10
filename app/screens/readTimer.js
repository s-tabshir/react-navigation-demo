import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReadTimer extends Component {
  constructor(props) {
    super(props);
    this.state ={ timer: 13}
  }
  
  componentDidMount(){
    this.interval = setInterval(
      () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
      1000
    );
  }
  
  componentDidUpdate(){
    if(this.state.timer === 1){ 
      clearInterval(this.interval);
    }
  }
  
  componentWillUnmount(){
   clearInterval(this.interval);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> {this.state.timer} </Text>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});