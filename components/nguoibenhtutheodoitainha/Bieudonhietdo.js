import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from "./../css";
import Heading from './../../Header'
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import { WebView } from 'react-native-webview';

var dateformat = require('dateformat')
var strtotime = require('strtotime')

export default class app extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
           maBn:''
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
            if (result != null) {
                let JSON_DATA = JSON.parse(result)
                this.setState({
                    maBn: JSON_DATA.maBn
                })

            }
        });
    }
    render() {
        return (
            <WebView source={{ uri: 'http://vietmy.thuongmaiso.com.vn/dang-ky-kham-benh/bieudonhietdoapp/?benhnhan=' + this.state.maBn }} />
        )

    }
}