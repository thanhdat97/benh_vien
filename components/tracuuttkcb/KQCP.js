import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import styles from "./../css";
import Heading from './../../Header'
import { ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';

var dateformat = require('dateformat')
export default class app extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        let DT = this.props.navigation.state.params.DT;

        this.state = {
            ngayKham: dateformat(DT.ngayKham, 'dd/mm/yyyy HH:MM'),
            malankham: DT.maLanKham,
            link:''
        }
    }
    componentDidMount() {
        fetch('http://27.72.76.115:8181/api/phim/get-all/' + this.state.malankham)
            .then((response) => response.json())
            .then((responseData) => {
                responseData.forEach(element => {
                    this.setState({link:element.link})

                });
            })
    }

    render() {
        return (
            <WebView source={{ uri: this.state.link }} />
        )
    }
}