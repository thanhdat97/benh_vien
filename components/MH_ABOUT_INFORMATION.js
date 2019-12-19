import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./css";
import AsyncStorage from '@react-native-community/async-storage';
import { Avatar } from 'react-native-elements';

var dateformat = require('dateformat')
export default class app extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);

        this.state = {
            Ma_bn: '',
            Ho_ten: '',
            diaChi: '',
            ngaySinh: '',
            gioiTinh: ''
        }

    }
    componentDidMount() {
        AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
            let JSON_DATA = JSON.parse(result)
            let Gioitinh
            this.setState({
                Ma_bn: JSON_DATA.maBn
            })
            fetch('http://27.72.76.115:8181/api/benh-nhan/get-one/' + JSON_DATA.maBn)
                .then((response) => response.json())
                .then((responseData) => {
                    if (responseData.gioiTinh == 1) {
                        Gioitinh = 'Nam'
                    } else {
                        Gioitinh = 'Nữ'
                    }
                    this.setState({
                        Ho_ten: responseData.hoTen,
                        diaChi: responseData.diaChi,
                        ngaySinh: dateformat(responseData.ngaySinh, "dd-mm-yyyy"),
                        gioiTinh: Gioitinh
                    })
                })
        })
    }

    render() {

        return (
            <View style={styles.container2}>
                <View style={styles.view_image}>
                    <Avatar
                        rounded
                        showEditButton
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
                <View style={styles.container_about}>
                    <View style={styles.column_875}>
                        <Text style={styles.text_877}>
                            Thông tin cá nhân
                        </Text>
                        <Text style={styles.text_875}>
                            <Text style={styles.text_87}>
                                Mã bênh nhân:
                             </Text>
                            <Text> {this.state.Ma_bn}</Text>
                        </Text>
                        <Text style={styles.text_875}>
                            <Text style={styles.text_87}>
                                Họ và tên:
                             </Text>
                            <Text> {this.state.Ho_ten}</Text>
                        </Text>
                        <Text style={styles.text_875}>
                            <Text style={styles.text_87}>
                                Giới tính:
                             </Text>
                            <Text> {this.state.gioiTinh}</Text>
                        </Text>
                        <Text style={styles.text_875}>
                            <Text style={styles.text_87}>
                                Địa chỉ:
                             </Text>
                            <Text> {this.state.diaChi}</Text>
                        </Text>
                        <Text style={styles.text_875}>
                            <Text style={styles.text_87}>
                                Ngày sinh:
                             </Text>
                            <Text> {this.state.ngaySinh}</Text>
                        </Text>
                    </View>
                </View>

            </View>
        )
    }
}