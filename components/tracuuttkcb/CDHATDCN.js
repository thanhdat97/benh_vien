import React, { Component } from 'react';
import { View, Text, Image,Dimensions } from 'react-native';
import styles from "./../css";
import AsyncStorage from '@react-native-community/async-storage'
import Heading from './../../Header'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';
import HTML from 'react-native-render-html';

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
            tableHead: ['STT','Chỉ số', 'Mô tả', 'Kết luận'],
            tableData: [],
            malankham:DT.maLanKham,
        }
        let tableData=[]
        fetch('http://27.72.76.115:8181/api/lich-su-kham-benh/get-ket-qua-cdha-tdcn/' + this.state.malankham)
        .then((response) => response.json())
        .then((responseData) => {
            responseData.forEach((element,index) => {
                tableData.push([index+1,element.tenChiSo,<HTML html={element.moTa} imagesMaxWidth={Dimensions.get('window').width} />,element.ketLuan])
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
                                Kết quả chẩn đoán hình ảnh chức năng
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