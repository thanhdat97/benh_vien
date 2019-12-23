import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from "./../css";
import AsyncStorage from '@react-native-community/async-storage'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../../android/app/src/main/assets/selection.json';
const Icon = createIconSetFromIcoMoon(fontelloConfig);
var dateformat = require('dateformat')
export default class app extends Component {
    static navigationOptions = ({ navigation }) => {

        return {
            title: "Thông tin tài chính",
            headerStyle: {
                backgroundColor: '#3F51B5',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 18
            }
        };
    };
    constructor(props) {
        super(props);
        let DT = this.props.navigation.state.params.DT;

        this.state = {
            Ma_bn: '',
            Ho_ten: '',
            diaChi: '',
            ngaySinh: '',
            gioiTinh: '',
            ngayKham: dateformat(DT.ngayKham, 'dd/mm/yyyy HH:MM'),
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
    XL_Chon7() {
        this.props.navigation.navigate("Man_hinh_chinh")
    }
    render() {

        return (
            <View style={styles.container2}>
                <View style={styles.go_back_home}>
                    <TouchableOpacity onPress={this.XL_Chon7.bind(this)} activeOpacity={0.5}>
                        <Icon name="home" color="#3B69C7" size={35} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.container_about}>
                        <View style={styles.column_875}>
                            <Text style={styles.text_877}>
                                Tra cứu thông tin khám chữa bệnh => Thông tin hành chính
                            </Text>

                            <Text style={styles.text_877}>
                                Ngày khám chữa bệnh: {this.state.ngayKham}
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
                </ScrollView>
            </View>
        )
    }
}