import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import styles from './css';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ho_ten: '',
      Ma_bn: ''
    }
  }
  componentDidMount() {
    AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
        let JSON_DATA = JSON.parse(result)
        this.setState({
            Ma_bn:'( '+JSON_DATA.maBn+' )'
        })
        fetch('http://27.72.76.115:8181/api/benh-nhan/get-one/'+JSON_DATA.maBn)
        .then((response) => response.json())
        .then((responseData) => {
           this.setState({
               Ho_ten:responseData.hoTen,
              
           })
        })
    })
}
  render() {
    return (
      <View style={styles.view_image}>
        <Image style={styles.image2} resizeMode='cover' source={require('./../images/AMV.jpg')}></Image>
        <Text style={{ color: 'white', textAlign: 'center', fontWeight: "bold" }}>{this.state.Ho_ten}</Text>
        <Text style={{ color: 'white', textAlign: 'center', fontWeight: "bold" }}>{this.state.Ma_bn}</Text>
      </View>
    )
  }
}