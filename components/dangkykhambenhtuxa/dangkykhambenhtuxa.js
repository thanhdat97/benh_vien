import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, TextInput, Alert } from 'react-native';
import Heading from "./../../Header";
import styles from "./../css";
import DatePicker from 'react-native-datepicker'
import RadioForm from 'react-native-simple-radio-button';
import Select2 from 'react-native-select-two';
import { IsEmail, Phonenumber } from './../../data/Dung_chung';
import AsyncStorage from '@react-native-community/async-storage'

var { width } = Dimensions.get("window");

export default class MH_State extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            date: null,
            radio_props: [
                { label: 'Buổi sáng', value: 0 },
                { label: 'Buổi chiều', value: 1 }
            ],
            mockData: [],
            value: 0,
            data: null,
            noidungkham: '',
            sdt: '',
            email:''
        }
        AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
            if (result != null) {
                let JSON_DATA = JSON.parse(result)
                this.setState({
                    maBn:JSON_DATA.maBn
                })
            }
        });
    }
    componentDidMount() {
        let DSBS = []
        fetch('http://27.72.76.115:8181/api/dang-ky-kham-benh/get-all-bac-si')
            .then((response) => response.json())
            .then((responseData) => {
                responseData.forEach(element => {
                    DSBS.push({ 'id': element.ma, 'name': element.ten })
                });
            })
        this.setState({ mockData: DSBS })
    }
    XL_Nhan() {
        if(this.state.date==null||this.state.data==null||this.state.noidungkham==''||this.state.sdt==''||this.state.email==''){
            Alert.alert(
                'Thông báo lỗi',
                'Bạn vui lòng nhập đầy thông tin'
            )
        }else if (!IsEmail(this.state.email)) {
            Alert.alert(
                'Thông báo lỗi',
                'Email không đúng định dạng'
            )
        } else if (!Phonenumber(this.state.sdt)) {
            Alert.alert(
                'Thông báo lỗi',
                'SDT không hợp lệ'
            )
        }else{
            fetch('http://27.72.76.115:8181/api/dang-ky-kham-benh/dang-ky', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    buoi:this.state.value,
                    dienThoai: this.state.sdt,
                    email: this.state.email,
                    id:{'maBn':this.state.maBn,'ngay':this.state.date},
                    maBn:this.state.maBn,
                    ngay:this.state.date,
                    noiDungKham:this.state.noidungkham,
                    tenBacSi:this.state.data[0]
                })
            })
                .then((response) => response.json())
                .then((responseData) => {
                    Alert.alert(
                        'Thông báo',
                        'Đặt lịch thành công', [
                            {
                                text: "OK", onPress: () => {}
                            }
                        ]
                    )
                })
        }
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
                            Đăng ký khám bệnh từ xa
                        </Text>

                        <View style={styles.flexstart}>
                            <DatePicker
                                style={{ width: "100%" }}
                                date={this.state.date}
                                mode="date"
                                placeholder="Ngày khám"
                                format="YYYY-MM-DD"
                                minDate={datenow}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        display: "none"
                                    },
                                    dateInput: {
                                        width: '100%',
                                        fontSize: 10,
                                        marginRight: 5,
                                        borderRadius: 3,
                                    }
                                }}

                                onDateChange={(date) => { this.setState({ date: date }) }}
                            />
                            <View style={{ margin: 20 }}>
                                <RadioForm
                                    radio_props={this.state.radio_props}
                                    initial={0}
                                    formHorizontal={true}
                                    onPress={(value) => { this.setState({ value: value }) }}
                                    labelStyle={{ fontSize: 15, width: width / 2, color: 'black' }}
                                    buttonColor={'#50C900'}
                                />
                            </View>
                            <Select2
                                isSelectSingle
                                style={styles.input}
                                colorTheme={'blue'}
                                popupTitle='Mời bạn chọn bác sĩ'
                                title='Mời bạn chọn bác sĩ'
                                data={this.state.mockData}
                                onSelect={data => {
                                    this.setState({ data });
                                }}
                                onRemoveItem={data => {
                                    this.setState({ data });
                                }}
                            />
                            <TextInput onChangeText={(noidungkham) => this.setState({ noidungkham })}
                                value={this.state.noidungkham} placeholder='Nội dung khám' style={styles.input} />
                            <TextInput onChangeText={(sdt) => this.setState({ sdt })}
                                value={this.state.sdt} placeholder='Số điện thoại' underlineColorAndroid='transparent' keyboardType={'numeric'} style={styles.input} />
                           <TextInput onChangeText={(email) => this.setState({ email })}
                                value={this.state.email} placeholder='Email' style={styles.input} />
                            <TouchableOpacity onPress={this.XL_Nhan.bind(this)} activeOpacity={0.5}>
                                <View style={styles.button}>
                                    <Text style={styles.text_button}>Gởi đăng ký</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}