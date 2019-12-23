import React, { Component } from 'react';
import { View, Text, TextInput, Alert, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './css';
import Heading from "./../Header";
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage'

export default class Cap_nhat_Infomation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Passwordnew: '',
            Password: null,
            Ma_bn: '',
            Passwordnew2: ''
        };
    }
    componentDidMount() {
        AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
            let JSON_DATA = JSON.parse(result)

            this.setState({
                Ma_bn: JSON_DATA.maBn
            })

        })
    }
    Xu_ly_Cap_nhat() {

        if (this.state.Passwordnew == '' || this.state.Password == '') {
            Alert.alert(
                'Thông báo lỗi',
                'Bạn phải nhập đủ thông tin'
            )
        } else if (this.state.Passwordnew2 != this.state.Passwordnew) {
            Alert.alert(
                'Thông báo lỗi',
                'Mật khẩu nhập lại không trùng khớp'
            )
        } else {
            this.setState({
                Item: { 'maBn': this.state.Ma_bn, 'matKhau': this.state.Passwordnew }
            })
            AsyncStorage.setItem('DATA_LOGIN', JSON.stringify(this.state.Item), () => { });
            fetch('http://27.72.76.115:8181/api/tai-khoan/change-pwd', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    active: 0,
                    maBn: this.state.Ma_bn,
                    matKhau: this.state.Password,
                    matKhauMoi: this.state.Passwordnew
                })
            })
                .then((response) => response.json())
                .then((responseData) => {
                    if (responseData.status == 500) {
                        Alert.alert(
                            'Thông báo lỗi',
                            'Mật khẩu cũ nhập không đúng'
                        )
                    } else {
                        Alert.alert(
                            'Thông báo',
                            'Cập nhật thành công', [
                            {
                                text: "OK", onPress: () => {
                                    this.setState({
                                        Password: '',
                                        Passwordnew: '',
                                    })
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
    render() {

        return (

            <View style={styles.container}>
                <Heading navigation={this.props.navigation} message={'Đổi mật khẩu'}/>
                <ScrollView>
                    <View style={styles.column_information}>
                        <View style={styles.view_image}>
                            <Text style={styles.tieu_de_about}> CẬP NHẬT MẬT KHẨU</Text>
                            <Image style={styles.image} resizeMode='contain' source={{ uri: "https://benhvienvietmy.herokuapp.com/amvi.png" }}></Image>
                        </View>

                        <View style={styles.container5}>
                            <View style={styles.column2}>
                                
                                <View style={styles.row}>
                                    <TextInput style={styles.textinput_modal}
                                        placeholder='Nhập password cũ'
                                        value={this.state.Password} secureTextEntry
                                        onChangeText={(value) => { this.setState({ Password: value }) }}
                                    >
                                    </TextInput>
                                </View>
                                <View style={styles.row}>
                                    <TextInput style={styles.textinput_modal}
                                        placeholder='Nhập password mới'
                                        value={this.state.Passwordnew} secureTextEntry
                                        onChangeText={(value) => { this.setState({ Passwordnew: value }) }}
                                    >
                                    </TextInput>
                                </View>
                                <View style={styles.row}>
                                    <TextInput style={styles.textinput_modal}
                                        placeholder='Nhập lại password mới'
                                        value={this.state.Passwordnew2} secureTextEntry
                                        onChangeText={(value) => { this.setState({ Passwordnew2: value }) }}
                                    >
                                    </TextInput>
                                </View>
                                <View style={styles.wrap_linear_hs_act}>
                                    <TouchableOpacity onPress={this.Xu_ly_Cap_nhat.bind(this)} activeOpacity={0.5}>
                                        <LinearGradient colors={['#3B69C7', '#3B69C7']} style={styles.linearGradient_32756}>
                                            <Text style={styles.buttonText}>Cập Nhật</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                    </View>
                </ScrollView>
            </View>
        );
    }
}
