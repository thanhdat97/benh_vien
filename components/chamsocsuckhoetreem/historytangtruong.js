import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./../css";
import Heading from './../../Header'
import { Table, Row, Rows } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import LinearGradient from 'react-native-linear-gradient';

var dateformat = require('dateformat')
var strtotime = require('strtotime')
export default class app extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);


        this.state = {
            tableHead: ['Tháng Tuổi', 'Cân Nặng'],
            tableData: [],
        }


    }
    componentDidMount() {
        let tableData = []
        AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
            if (result != null) {
                let JSON_DATA = JSON.parse(result)
                this.setState({
                    maBn: JSON_DATA.maBn
                })
                fetch('http://27.72.76.115:8181/api/tuong-tac/get-all-tang-truong/' + JSON_DATA.maBn)
                    .then((response) => response.json())
                    .then((responseData) => {
                        responseData.forEach(element => {
                            tableData.push([element.thang, element.canNang])
                        });
                        this.setState({ tableData: tableData })
                    })
            }
        });
    }
    render() {

        return (
            <View style={styles.container2}>
                <Heading />
                <ScrollView>
                    <View style={styles.container_about}>
                        <View style={styles.column_875}>
                            <Text style={styles.text_877}>
                                Lịch sử tăng trưởng
                            </Text>
                        </View>
                    </View>
                    <View style={styles.container_table}>
                        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                            <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                            <Rows data={this.state.tableData} style={styles.data} textStyle={styles.text} />
                        </Table>
                    </View>
                </ScrollView>
            </View>
        )
    }
}