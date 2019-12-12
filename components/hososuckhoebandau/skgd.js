import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions, Alert } from 'react-native';
import styles from './../css';
import AsyncStorage from '@react-native-community/async-storage'
import { Table, Row } from 'react-native-table-component';
import Heading from './../../Header'

var { width } = Dimensions.get("window");

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: [this.props.item.key, this.props.item.value],

        }
    }
    render() {
        if (this.props.item.isTitle == true) {
            let tableHead = [this.props.item.key]
            return (
                <View style={styles.container_table2}>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={tableHead} style={{
                            height: 50, width: width, backgroundColor: this.props.item.isTitle == true ? "green"
                                : this.props.index % 2 == 0 ? "#fff" : "#e6e5e5"
                        }} textStyle={styles.text2} />
                    </Table>
                </View>
            );
        } else {
            return (
                <View style={styles.container_table2}>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={this.state.tableHead} style={{
                            height: 50, width: width, backgroundColor: this.props.item.isTitle == true ? "green"
                                : this.props.index % 2 == 0 ? "#fff" : "#e6e5e5"
                        }} textStyle={styles.text} />
                    </Table>
                </View>
            );
        }
    }
}

export default class Danh_sach_PH extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            Danh_sach_ph: [],
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
            let JSON_DATA = JSON.parse(result)
            this.setState({
                Ma_bn: JSON_DATA.maBn
            })
            fetch('http://27.72.76.115:8181/api/ho-so-sk-ban-dau/get-thong-tin-suc-khoe-gia-dinh/' + JSON_DATA.maBn)
                .then((response) => response.json())
                .then((responseData) => {
                    if (responseData.status != 500) {
                        this.setState({
                            Danh_sach_ph: responseData
                        })
                    }
                })
        })
    }


    render() {
        if (this.state.Danh_sach_ph.length != 0) {
            return (
                <View style={styles.container}>
                    <Heading />
                    <View style={styles.container_about}>
                        <View style={styles.column_875}>
                            <Text style={styles.text_877}>
                                Thông tin súc khỏe gia đình
                            </Text>

                            <View style={styles.container_about2}>
                                <FlatList
                                    ref={'Danh_sach_ph'}
                                    data={this.state.Danh_sach_ph}
                                    keyExtractor={(item) => item.key}
                                    renderItem={({ item, index }) => {

                                        return (
                                            <TouchableOpacity activeOpacity={0.5}>
                                                <FlatListItem item={item} index={index} navigation={this.props.navigation} parentFlatList={this}></FlatListItem>
                                            </TouchableOpacity>
                                        );
                                    }}>
                                </FlatList>

                            </View>
                        </View>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Heading />
                    <View style={styles.container_about}>
                        <View style={styles.column_875}>
                            <Text style={styles.text_877}>
                                Thông tin súc khỏe gia đình
                            </Text>
                            <Text style={styles.text_877}>
                                Hiện không có thông tin
                            </Text>
                        </View>
                    </View>
                </View>
            );
        }
    }
}

