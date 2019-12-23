import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, TextInput, Alert, ScrollView } from 'react-native';
import styles from "./../css";
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../../android/app/src/main/assets/selection.json';
const Icon = createIconSetFromIcoMoon(fontelloConfig);
var dateformat = require('dateformat')
var strtotime = require('strtotime')


export default class MH_State extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Huyết áp",
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
        this.state = {
            huyetaptoithieu: '',
            huyetaptoida: ''
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
        if (this.state.huyetaptoida == '' || this.state.huyetaptoithieu == '') {
            Alert.alert(
                'Thông báo lỗi',
                'Bạn vui lòng nhập chỉ số huyết áp'
            )
        } else {
            fetch('http://27.72.76.115:8181/api/tuong-tac/save-huyet-ap', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    maBn: this.state.maBn,
                    toiDa: this.state.huyetaptoida,
                    toiThieu: this.state.huyetaptoithieu,
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
        this.props.navigation.navigate("Man_hinh_historyhuyetap")
    }
    XL_Chon7() {
        this.props.navigation.navigate("Man_hinh_chinh")
    }
    render() {
        let datenow = new Date();
        datenow.setDate(datenow.getDate() + 1)
        return (
            <View style={styles.container}>
                <View style={styles.go_back_home}>
                    <TouchableOpacity onPress={this.XL_Chon7.bind(this)} activeOpacity={0.5}>
                        <Icon name="home" color="#3B69C7" size={35} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.container_about}>
                        <View style={styles.column_875}>
                            <Text style={styles.text_877}>
                                Người bệnh tự theo dõi tại nhà => Huyết áp
                        </Text>
                            <View style={styles.flexstart}>
                                <TextInput onChangeText={(huyetaptoithieu) => this.setState({ huyetaptoithieu })}
                                    value={this.state.huyetaptoithieu} placeholder='Huyết áp tối thiếu' underlineColorAndroid='transparent' keyboardType={'numeric'} style={styles.input} />
                                <TextInput onChangeText={(huyetaptoida) => this.setState({ huyetaptoida })}
                                    value={this.state.huyetaptoida} placeholder='Huyết áp tối đa' underlineColorAndroid='transparent' keyboardType={'numeric'} style={styles.input} />
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
                </ScrollView>
            </View>
        );
    }
}