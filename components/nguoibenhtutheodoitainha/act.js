import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, TextInput, Alert } from 'react-native';
import styles from "./../css";
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage'
import RadioForm from 'react-native-simple-radio-button';
import { ScrollView } from 'react-native-gesture-handler';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../../android/app/src/main/assets/selection.json';
const Icon = createIconSetFromIcoMoon(fontelloConfig);
var dateformat = require('dateformat')
var strtotime = require('strtotime')

var { width } = Dimensions.get("window");

export default class MH_State extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Test ACT",
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
            hba1c: '',
            cau1: [
                { label: 'Tất cả các ngày', value: 1 },
                { label: 'Hầu hết các ngày', value: 2 },
                { label: 'Một số ngày', value: 3 },
                { label: 'Chỉ một ít ngày', value: 4 },
                { label: 'Không có ngày nào', value: 5 },
            ],
            diemcau1: 0,
            cau2: [
                { label: '>1 lần/ngày', value: 1 },
                { label: '=1 lần/ngay', value: 2 },
                { label: '3-6 lần/tuần', value: 3 },
                { label: '1-2 lần/tuần', value: 4 },
                { label: 'Không có lần nào', value: 5 },
            ],
            diemcau2: 0,
            cau3: [
                { label: '>=4 đêm/1 tuần', value: 1 },
                { label: '2-3 đêm/1 tuần', value: 2 },
                { label: '1 đêm/ 1 tuần', value: 3 },
                { label: '1-2 lần/4 tuần', value: 4 },
                { label: 'Không có lần nào', value: 5 },
            ],
            diemcau3: 0,
            cau4: [
                { label: '>=3 lần/ngày', value: 1 },
                { label: '1-2 lần/ngày', value: 2 },
                { label: '2-3 lần/1 tuần', value: 3 },
                { label: '<=1 lần/1 tuần', value: 4 },
                { label: 'Không có lần nào', value: 5 },
            ],
            diemcau4: 0,
            cau5: [
                { label: 'Không kiểm soát', value: 1 },
                { label: 'Kiểm soát kém', value: 2 },
                { label: 'Có kiểm soát', value: 3 },
                { label: 'Kiểm soát tốt', value: 4 },
                { label: 'Kiểm soát hoàn toàn', value: 5 },
            ],
            diemcau5: 0,
            tongdiem: 0
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
        if (this.state.diemcau1 == 0 || this.state.diemcau2 == 0 || this.state.diemcau3 == 0 || this.state.diemcau4 == 0 || this.state.diemcau5 == 0) {
            Alert.alert(
                'Thông báo lỗi',
                'Bạn vui lòng chọn đầy đủ đáp án cho các câu hỏi '
            )
        } else {
            fetch('http://27.72.76.115:8181/api/tuong-tac/save-testact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    maBn: this.state.maBn,
                    testAct: this.state.tongdiem,
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
        this.props.navigation.navigate("Man_hinh_historyact")
    }
    XL_Chon7() {
        this.props.navigation.navigate("Man_hinh_chinh")
    }
    render() {
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
                                Người bệnh tự theo dõi tại nhà => Test ACT
                            </Text>
                            <View style={styles.flexstart}>
                                <Text style={styles.text_87712}>
                                    1. Trong 4 tuần qua, bao nhiêu ngày bệnh hen làm cho bạn phải nghỉ làm, nghỉ học hay phải nghỉ tại nhà?
                                </Text>
                                <View style={styles.text_87712}>
                                    <RadioForm
                                        radio_props={this.state.cau1}
                                        initial={-1}
                                        onPress={(value) => { this.setState({ diemcau1: value, tongdiem: value + this.state.diemcau2 + this.state.diemcau3 + this.state.diemcau4 + this.state.diemcau5 }) }}
                                        labelStyle={{ fontSize: 15, color: 'black' }}
                                        buttonColor={'#50C900'}
                                        buttonSize={20}
                                        buttonOuterSize={20}
                                    />
                                </View>
                                <Text style={styles.text_87712}>
                                    2. Trong 4 tuần qua, bạn có thường gặp những cơn khó thở không?
                                </Text>
                                <View style={styles.text_87712}>
                                    <RadioForm
                                        radio_props={this.state.cau2}
                                        initial={-1}
                                        onPress={(value) => { this.setState({ diemcau2: value, tongdiem: this.state.diemcau1 + value + this.state.diemcau3 + this.state.diemcau4 + this.state.diemcau5 }) }}
                                        labelStyle={{ fontSize: 15, color: 'black' }}
                                        buttonColor={'#50C900'}
                                        buttonSize={20}
                                        buttonOuterSize={20}
                                    />
                                </View>
                                <Text style={styles.text_87712}>
                                    3. Trong 4 tuần qua, bạn có thường phải thức giấc ban đêm hay phải dậy sớm do các triệu chứng của hen như ho, khò khè, khó thở, nặng ngực?
                                </Text>
                                <View style={styles.text_87712}>
                                    <RadioForm
                                        radio_props={this.state.cau3}
                                        initial={-1}
                                        onPress={(value) => { this.setState({ diemcau3: value, tongdiem: this.state.diemcau1 + this.state.diemcau2 + value + this.state.diemcau4 + this.state.diemcau5 }) }}
                                        labelStyle={{ fontSize: 15, color: 'black' }}
                                        buttonColor={'#50C900'}
                                        buttonSize={20}
                                        buttonOuterSize={20}
                                    />
                                </View>
                                <Text style={styles.text_87712}>
                                    4. Trong 4 tuần qua, bạn có thường sử dụng thuốc cắt cơn dạng xịt hay khí dung không?
                                </Text>
                                <View style={styles.text_87712}>
                                    <RadioForm
                                        radio_props={this.state.cau4}
                                        initial={-1}
                                        onPress={(value) => { this.setState({ diemcau4: value, tongdiem: this.state.diemcau1 + this.state.diemcau2 + this.state.diemcau3 + value + this.state.diemcau5 }) }}
                                        labelStyle={{ fontSize: 15, color: 'black' }}
                                        buttonColor={'#50C900'}
                                        buttonSize={20}
                                        buttonOuterSize={20}
                                    />
                                </View>
                                <Text style={styles.text_87712}>
                                    5. Bạn đánh giá bệnh hen của bạn được kiểm soát như thế nào trong 4 tuần qua?
                                </Text>
                                <View style={styles.text_87712}>
                                    <RadioForm
                                        radio_props={this.state.cau5}
                                        initial={-1}
                                        onPress={(value) => { this.setState({ diemcau5: value, tongdiem: this.state.diemcau1 + this.state.diemcau2 + this.state.diemcau3 + this.state.diemcau4 + value }) }}
                                        labelStyle={{ fontSize: 15, color: 'black' }}
                                        buttonColor={'#50C900'}
                                        buttonSize={20}
                                        buttonOuterSize={20}
                                    />
                                </View>
                                <Text style={styles.text_87712}>
                                    Tổng điểm: {this.state.tongdiem}
                                </Text>
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