import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, TextInput, Alert } from 'react-native';
import Heading from "./../../Header";
import styles from "./../css";
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage'
var dateformat=require('dateformat')
var strtotime=require('strtotime')

var { width } = Dimensions.get("window");

export default class MH_State extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            mach:''
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
    componentDidMount() {

    }
    XL_Nhan() {
        if(this.state.mach==''){
            Alert.alert(
                'Thông báo lỗi',
                'Bạn vui lòng nhập chỉ số mạch'
            )
        }else{
            fetch('http://27.72.76.115:8181/api/tuong-tac/save-mach', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    maBn:this.state.maBn,
                    mach:this.state.mach,
                    ngay:strtotime(dateformat(new Date(),"yyyy-mm-dd HH:MM"))
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
        this.props.navigation.navigate("Man_hinh_historyMach")
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
                           Người bệnh tự theo dõi tại nhà => Mạch
                        </Text>
                        <View style={styles.flexstart}>
                            <TextInput onChangeText={(mach) => this.setState({ mach })}
                                value={this.state.mach} placeholder='Mạch' underlineColorAndroid='transparent' keyboardType={'numeric'} style={styles.input} />
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