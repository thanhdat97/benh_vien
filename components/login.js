import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput, Alert } from 'react-native';
import Heading from "./../Header";
import styles from "./css";
import AsyncStorage from '@react-native-community/async-storage'

export default class MH_State extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            Ten_Dang_nhap: '',
            Mat_khau: '',
            Item: '',
            Nam_sinh:'',
            Ho_ten:''
        }
        AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
            if (result != null) {
                let JSON_DATA = JSON.parse(result)
                this.props.navigation.navigate("Man_hinh_Menu", { "DT": JSON_DATA })
               
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Heading />
                     <View style={styles.view_image_login}>
                        <Text style={styles.tieu_de_about}>Đăng nhập tài khoản</Text>
                    </View>
                    <View style={styles.flexstart}>
                        <TextInput onChangeText={(Ten_Dang_nhap) =>this.setState({ Ten_Dang_nhap })}
                            value={this.state.Ten_Dang_nhap} placeholder='Mã định danh' style={styles.input} />
                        
                        <TextInput onChangeText={(Mat_khau) => this.setState({ Mat_khau })}
                            value={this.state.Mat_khau} placeholder='Mật khẩu' style={styles.input} secureTextEntry />
                        <TouchableOpacity onPress={this.XL_Nhan.bind(this)} activeOpacity={0.5}>
                            <View style={styles.button}>
                                <Text style={styles.text_button}>Đăng nhập</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
            </View>
        );
    }
    XL_Nhan() {
        if (this.state.Ten_Dang_nhap == '' || this.state.Mat_khau == '') {
            Alert.alert(
                'Thông báo lỗi',
                'Bạn vui lòng nhập đầy đủ tên đăng nhập và mật khẩu'
            )
        } else {
            fetch('http://27.72.76.115:8181/api/tai-khoan/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    active:0,
                    maBn: this.state.Ten_Dang_nhap,
                    matKhau: this.state.Mat_khau,
                    matKhauMoi:''
                })
            })
                .then((response) => response.json())
                .then((responseData) => {
                    if(responseData.status==500){
                        Alert.alert(
                            'Thông báo lỗi',
                            'Tên đăng nhập hoặc mật khẩu không đúng'
                        )
                    }else{
                        Alert.alert(
                            'Thông báo',
                            'Đăng nhập thành công', [
                                {
                                    text: "OK", onPress: () => {
                                        this.setState({
                                            Item: {'maBn': this.state.Ten_Dang_nhap,'matKhau': this.state.Mat_khau}
                                        })
                                        AsyncStorage.setItem('DATA_LOGIN', JSON.stringify(this.state.Item), () => { });

                                        this.props.navigation.navigate("Man_hinh_Menu", { "DT": this.state.Item })

                                    }
                                }
                            ]
                        )
                    }                    
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
}
