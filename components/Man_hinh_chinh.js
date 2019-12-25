import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./css";
import { ScrollView } from 'react-native-gesture-handler';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from './../android/app/src/main/assets/selection.json';
import Heading from './../Header';
const Icon = createIconSetFromIcoMoon(fontelloConfig);
var dateformat = require('dateformat')
export default class INFORAMTION extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);


    }
    XL_Chon() {
        this.props.navigation.navigate("Man_hinh_ABOUT")
    }
    XL_Chon2() {
        this.props.navigation.navigate("Man_hinh_DOIMK")
    }
    XL_Chon3() {
        this.props.navigation.navigate("Man_hinh_Tracuuttkcb")
    }
    XL_Chon4() {
        this.props.navigation.navigate("Man_hinh_HSSKBD")
    }
    XL_Chon5() {
        this.props.navigation.navigate("Man_hinh_DKKBTX")
    }
    XL_Chon6() {
        this.props.navigation.navigate("Man_hinh_NBTTTN")
    }
    XL_Chon7() {
        this.props.navigation.navigate("Man_hinh_CSSKTM")
    }
    XL_Chon8() {
        this.props.navigation.navigate("Man_hinh_CSSPNCT")
    }
    XL_Chon9() {
        this.props.navigation.navigate("Logout")
    }
    render() {

        return (
            <View style={styles.container2}>
                <Heading navigation={this.props.navigation} />

                <ScrollView>
                    <View style={styles.container_about}>
                        <View style={styles.column_875}>
                            <TouchableOpacity onPress={this.XL_Chon.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="settings" color="green" size={40} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Thông tin cá nhân
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon2.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="lock" color="red" size={40} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Đổi mật khẩu
                                     </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon3.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="search" color="green" size={40} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Tra cứu khám chữa bệnh
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon4.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="paste" color="blue" size={40} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Hồ sơ sức khỏe ban đầu
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon5.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="playlist_add_check" color="red" size={40} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Đăng ký khám bệnh từ xa
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon6.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="feed" color="blue" size={40} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Người bệnh tự theo dõi tại nhà
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon7.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="health" color="green" size={40} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Chăm sóc sức khỏe trẻ em
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon8.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="health" color="green" size={40} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Chăm sóc sức khỏe phụ nữ có thai
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon9.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="switch" color="red" size={20} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                       Đăng Xuất
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