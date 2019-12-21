import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./../css";
import { ScrollView } from 'react-native-gesture-handler';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../../android/app/src/main/assets/selection.json';
const Icon = createIconSetFromIcoMoon(fontelloConfig);
var dateformat = require('dateformat')
export default class INFORAMTION extends Component {
    static navigationOptions = ({ navigation }) => {
       
        return {
            title: "Thông tin Khám chữa bệnh",
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
            maLanKham: DT.maLanKham,
            ngayKham: dateformat(DT.ngayKham, 'dd/mm/yyyy HH:MM'),
            item: DT,
        }

    }
    XL_Chon() {
        this.props.navigation.navigate("Man_hinh_Administration", { "DT": this.state.item })
    }
    XL_Chon2() {
        this.props.navigation.navigate("Man_hinh_Medical", { "DT": this.state.item })
    }
    XL_Chon3() {
        this.props.navigation.navigate("Man_hinh_DONTHUOC", { "DT": this.state.item })
    }
    XL_Chon4() {
        this.props.navigation.navigate("Man_hinh_KQXN", { "DT": this.state.item })
    }
    XL_Chon5() {
        this.props.navigation.navigate("Man_hinh_CDHATDCN", { "DT": this.state.item })
    }
    XL_Chon6() {
        this.props.navigation.navigate("Man_hinh_KQCP", { "DT": this.state.item })
    }
    render() {

        return (
            <View style={styles.container2}>
                <ScrollView>
                    <View style={styles.container_about}>
                        <View style={styles.column_875}>
                            <Text style={styles.text_877}>
                                Tra cứu thông tin khám chữa bệnh => Thông tin Khám chữa bệnh
                        </Text>
                            <Text style={styles.text_877}>
                                Ngày khám chữa bệnh: {this.state.ngayKham}
                            </Text>
                            <TouchableOpacity onPress={this.XL_Chon.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="information" color="green" size={35} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Thông tin hành chính
                             </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon2.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="information" color="green" size={35} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Thông tin khám chữa bệnh
                             </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon3.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="pil" color="green" size={35} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Đơn thuốc
                             </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon4.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="beaker" color="green" size={35} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Kết quả xét nghiệm
                             </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon5.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="heartbeat" color="green" size={30} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Kết quả chuẩn đoán hình ảnh - Thăm dò chức năng
                             </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon6.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="tools-2" color="green" size={30} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Kết quả chụp phim
                             </Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}