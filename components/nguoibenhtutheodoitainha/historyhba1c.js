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
            tableHead: ['Ngày giờ', 'Hba1C'],
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
                fetch('http://27.72.76.115:8181/api/tuong-tac/get-all-hba1c/' + JSON_DATA.maBn)
                    .then((response) => response.json())
                    .then((responseData) => {
                        responseData.forEach(element => {
                            tableData.push([dateformat(element.ngay, 'dd-mm-yyyy HH:MM'), element.hba1c])
                        });
                        this.setState({ tableData: tableData })
                    })
            }
        });
    }
    XL_Chon() {
        this.props.navigation.navigate("Man_hinh_bieudohba1c")
    }
    render() {

        return (
            <View style={styles.container2}>
                <Heading />
                <ScrollView>
                    <View style={styles.container_about}>
                        <View style={styles.column_875}>
                            <Text style={styles.text_877}>
                                Lịch sử Hba1C
                            </Text>
                        </View>
                    </View>
                    <View style={styles.container_table}>
                        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                            <Row data={this.state.tableHead} style={styles.headact} textStyle={styles.text} />
                            <Rows data={this.state.tableData} style={styles.dataact} textStyle={styles.text} />
                        </Table>
                    </View>
                    <View style={styles.wrap_linear_hs_act}>
                        <TouchableOpacity onPress={this.XL_Chon.bind(this)} activeOpacity={0.5}>
                            <LinearGradient colors={['#3B69C7', '#3B69C7']} style={styles.linearGradient_327567}>
                                <Text style={styles.buttonText}>Biểu đồ</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}