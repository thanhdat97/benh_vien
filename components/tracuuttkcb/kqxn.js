import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./../css";
import AsyncStorage from '@react-native-community/async-storage'
import Heading from './../../Header'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';

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
            tableHead: ['STT','Tên chỉ số', 'Kết quả', 'Giá trị bình thường', 'Ngày kết quả'],
            tableData: [],
            malankham:DT.maLanKham
        }
    }
    componentDidMount() {
        let tableData=[]
        fetch('http://27.72.76.115:8181/api/lich-su-kham-benh/get-ket-qua-xet-nghiem/' + this.state.malankham)
        .then((response) => response.json())
        .then((responseData) => {
            responseData.forEach((element,index) => {
                tableData.push([index+1,element.tenChiSo,element.ketLuan,element.giaTri,dateformat(element.ngayKq,'dd/mm/yyyy HH:MM')])
            })
           this.setState({tableData:tableData})

        })
    }

    render() {

        return (
            <View style={styles.container2}>
                <Heading />
                <ScrollView>
                    <View style={styles.container_about}>
                        <View style={styles.column_875}>
                            <Text style={styles.text_877}>
                                Kết quả xét nghiệm
                        </Text>
                            <Text style={styles.text_877}>
                                Ngày khám chữa bệnh: {this.state.ngayKham}
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