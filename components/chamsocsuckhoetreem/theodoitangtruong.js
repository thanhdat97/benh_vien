import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, TextInput, Alert } from 'react-native';
import Heading from "./../../Header";
import styles from "./../css";
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage'
var dateformat = require('dateformat')
var strtotime = require('strtotime')

var { width } = Dimensions.get("window");

export default class MH_State extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            thangtuoi: '',
            cannang: ''
        }
        AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
            if (result != null) {
                let JSON_DATA = JSON.parse(result)
                this.setState({
                    maBn: JSON_DATA.maBn
                })
            }
        });
    }
    XL_Nhan() {
        if (this.state.thangtuoi == ''||this.state.cannang=='') {
            Alert.alert(
                'Thông báo lỗi',
                'Bạn vui lòng nhập chỉ số huyết áp'
            )
        } else {
            fetch('http://27.72.76.115:8181/api/tuong-tac/save-tang-truong', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    maBn: this.state.maBn,
                    thang: this.state.thangtuoi,
                    canNang:this.state.cannang,
                    ngayud: strtotime(dateformat(new Date(), "yyyy-mm-dd HH:MM"))
                })
            })
                .then((response) => response.json())
                .then((responseData) => {
                    Alert.alert(
                        'Thông báo lỗi',
                        'Thêm thành công'
                    )
                })
        }
    }
    XL_Chon() {
        this.props.navigation.navigate("Man_hinh_historytangtruong")
    }
    render() {
        let datenow = new Date();
        datenow.setDate(datenow.getDate() + 1)
        return (
            <View style={styles.container}>
                <Heading />
                <View style={styles.container_about}>
                    <View style={styles.column_875}>
                        <Text style={styles.text_877}>
                            Chăm sóc sức khỏe trê em => Theo dõi tăng trưởng
                        </Text>
                        <View style={styles.flexstart}>
                            <TextInput onChangeText={(thangtuoi) => this.setState({ thangtuoi })}
                                value={this.state.thangtuoi} placeholder='Tháng tuổi' underlineColorAndroid='transparent' keyboardType={'numeric'} style={styles.input} />
                            <TextInput onChangeText={(cannang) => this.setState({ cannang })}
                                value={this.state.cannang} placeholder='Cân nặng' underlineColorAndroid='transparent' keyboardType={'numeric'} style={styles.input} />
                            <View style={styles.row_linear_act}>
                                <View style={styles.linear2}>
                                    <TouchableOpacity onPress={this.XL_Nhan.bind(this)} activeOpacity={0.5}>
                                        <LinearGradient colors={['#3B69C7', '#3B69C7']} style={styles.linearGradient_327567act}>
                                            <Text style={styles.buttonText}>Cập Nhật</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.linear2}>
                                    <TouchableOpacity onPress={this.XL_Chon.bind(this)} activeOpacity={0.5}>
                                        <LinearGradient colors={['#3B69C7', '#3B69C7']} style={styles.linearGradient_327567act}>
                                            <Text style={styles.buttonText}>Xem lịch sử</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}