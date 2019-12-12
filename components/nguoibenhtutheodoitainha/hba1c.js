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
            hba1c: '',
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
        if (this.state.hba1c == '') {
            Alert.alert(
                'Thông báo lỗi',
                'Bạn vui lòng nhập chỉ số Hba1C '
            )
        } else {
            fetch('http://27.72.76.115:8181/api/tuong-tac/save-hba1c', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    maBn: this.state.maBn,
                    hba1c: this.state.hba1c,
                    ngay: strtotime(dateformat(new Date(), "yyyy-mm-dd HH:MM"))
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
        this.props.navigation.navigate("Man_hinh_historyhba1c")
    }
    render() {
        return (
            <View style={styles.container}>
                <Heading />
                <View style={styles.container_about}>
                    <View style={styles.column_875}>
                        <Text style={styles.text_877}>
                            Người bệnh tự theo dõi tại nhà
                        </Text>
                        <Text style={styles.text_877}>
                            Hba1C
                        </Text>
                        <View style={styles.flexstart}>
                            <TextInput onChangeText={(hba1c) => this.setState({ hba1c })}
                                value={this.state.hba1c} placeholder='Hba1C' underlineColorAndroid='transparent' keyboardType={'numeric'} style={styles.input} />
                            <View style={styles.row}>
                                <View style={styles.linear2}>
                                    <TouchableOpacity onPress={this.XL_Nhan.bind(this)} activeOpacity={0.5}>
                                        <LinearGradient colors={['#97CAE5', '#3F51B5']} style={styles.linearGradient_327567}>
                                            <Text style={styles.buttonText}>Cập Nhật</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.linear2}>
                                    <TouchableOpacity onPress={this.XL_Chon.bind(this)} activeOpacity={0.5}>
                                        <LinearGradient colors={['#97CAE5', '#3F51B5']} style={styles.linearGradient_327567}>
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