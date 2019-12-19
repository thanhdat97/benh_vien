import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput, Alert, ImageBackground } from 'react-native';
import Heading from "./../Header";
import styles from "./css";
import AsyncStorage from '@react-native-community/async-storage'
import { Avatar } from 'react-native-elements';
import Video from "react-native-video";
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../android/app/src/main/assets/selection.json';
const Icon = createIconSetFromIcoMoon(fontelloConfig);
var dateformat = require('dateformat')

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
            Nam_sinh: '',
            Ho_ten: ''
        }
        AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
            if (result != null) {
                let JSON_DATA = JSON.parse(result)
                this.props.navigation.navigate("Man_hinh_Menu", { "DT": JSON_DATA })

            }
        });
    }
    changemabn() {
        let bn = this.state.Ten_Dang_nhap.substr(0, 2);
        let ma_bn
        if (bn == 'BN') {
            let mang_bn = this.state.Ten_Dang_nhap.split(bn);
            if (mang_bn[1] != '') {
                let length = mang_bn[1].length
                if (length < 9) {
                    let conlai = 9 - length;
                    let chuoi = '';

                    for (var i = 0; i < conlai; i++) {
                        chuoi = chuoi + '0'
                    }

                     ma_bn = 'BN' + chuoi + mang_bn[1];
                    this.setState({ Ten_Dang_nhap: ma_bn })
                }else{
                    ma_bn = this.state.Ten_Dang_nhap;
                }
                fetch('http://27.72.76.115:8181/api/benh-nhan/get-one/' + ma_bn)
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState({
                        Ho_ten: responseData.hoTen,
                        Nam_sinh: dateformat(responseData.ngaySinh, "dd-mm-yyyy"),
                    })
                })
            }
        }
    }
    render() {
        return (

            <View style={styles.container_dangnhap}>
                <ImageBackground
                    style={styles.container}
                    source={require("../video/hinh-anh-cay-mai-vang-2.jpg")}
                    imageStyle={{ resizeMode: 'cover' }}
                />
                <View style={styles.view_image_login_dangnhap}>
                    <Text style={styles.tieu_de_about}>Đăng nhập tài khoản</Text>
                    <View style={styles.view_image_login}>
                        <Avatar
                            rounded
                            size="large"
                            title="avatar"
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                            source={{
                                uri:
                                    'https://benhvienvietmy.herokuapp.com/login.png',
                            }}

                        />
                    </View>
                    <View style={styles.wrap_dangnhap}>
                        <View style={styles.wrap_icon_and_textinput_login}>
                            <View style={styles.wrap_icon_login}>
                                <Icon name="user-solid-circle" color="#dcdcdc" size={27} />
                            </View>
                            <TextInput onChangeText={(Ten_Dang_nhap) => this.setState({ Ten_Dang_nhap })} onSubmitEditing={this.changemabn.bind(this)}
                                value={this.state.Ten_Dang_nhap} placeholder='Mã định danh' style={styles.input_name_login} />
                        </View >
                        <View style={styles.wrap_icon_and_textinput_login}>
                            <View style={styles.wrap_icon_login}>
                                <Icon name="user-solid-circle" color="#dcdcdc" size={27} />
                            </View>
                            <TextInput editable={false}
                                value={this.state.Ho_ten} placeholder='Họ Tên' style={styles.input_name_login} />
                        </View >
                        <View style={styles.wrap_icon_and_textinput_login}>
                            <View style={styles.wrap_icon_login}>
                                <Icon name="user-solid-circle" color="#dcdcdc" size={27} />
                            </View>
                            <TextInput editable={false}
                                value={this.state.Nam_sinh} placeholder='Ngày sinh' style={styles.input_name_login} />
                        </View >
                        <View style={styles.wrap_icon_and_textinput_login}>
                            <View style={styles.wrap_icon_login}>
                                <Icon name="lock" color="#dcdcdc" size={27} />
                            </View>
                            <TextInput onFocus={this.changemabn.bind(this)} onChangeText={(Mat_khau) => this.setState({ Mat_khau })}
                                value={this.state.Mat_khau} placeholder='Mật khẩu' style={styles.input_matkhau_login} secureTextEntry />
                        </View>
                        <TouchableOpacity onPress={this.XL_Nhan.bind(this)} activeOpacity={0.5}>
                            <View style={styles.button_dangnhap}>
                                <Text style={styles.text_button_dangnhap}>Đăng nhập</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

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
                    active: 0,
                    maBn: this.state.Ten_Dang_nhap,
                    matKhau: this.state.Mat_khau,
                    matKhauMoi: ''
                })
            })
                .then((response) => response.json())
                .then((responseData) => {
                    if (responseData.status == 500) {
                        Alert.alert(
                            'Thông báo lỗi',
                            'Tên đăng nhập hoặc mật khẩu không đúng'
                        )
                    } else {
                        Alert.alert(
                            'Thông báo',
                            'Đăng nhập thành công', [
                                {
                                    text: "OK", onPress: () => {
                                        this.setState({
                                            Item: { 'maBn': this.state.Ten_Dang_nhap, 'matKhau': this.state.Mat_khau }
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
