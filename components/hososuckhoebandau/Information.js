import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./../css";
import Heading from './../../Header'
import { ScrollView } from 'react-native-gesture-handler';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../../android/app/src/main/assets/selection.json';
const Icon = createIconSetFromIcoMoon(fontelloConfig);
export default class INFORAMTION extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);

        this.state = {
        }

    }
    XL_Chon() {
        this.props.navigation.navigate("Man_hinh_TTTC")
    }
    XL_Chon2() {
        this.props.navigation.navigate("Man_hinh_SKCN")
    }
    XL_Chon3() {
        this.props.navigation.navigate("Man_hinh_SKGD")
    }
    XL_Chon4() {
        this.props.navigation.navigate("Man_hinh_SKSS")
    }
    XL_Chon5() {
        this.props.navigation.navigate("Man_hinh_SKK")
    }
    XL_Chon7() {
        this.props.navigation.navigate("Man_hinh_chinh")
    }
    render() {

        return (
            <View style={styles.container2}>
                <Heading navigation={this.props.navigation} message={'Hồ sơ sức khỏe ban đầu'}/>
                <View style={styles.go_back_home}>
                    <TouchableOpacity onPress={this.XL_Chon7.bind(this)} activeOpacity={0.5}>
                        <Icon name="home" color="#3B69C7" size={35} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.container_about}>
                        <View style={styles.column_875}>

                            <Text style={styles.text_title_hososuckhoebandau}>Hồ sơ sức khỏe ban đầu</Text>
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
                                        Thông tin sức khỏe cá nhân
                             </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon3.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="information" color="green" size={35} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Thông tin sức khỏe gia đình
                             </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon4.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="information" color="green" size={35} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Thông tin sức khỏe sinh sản
                             </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon5.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="information" color="green" size={35} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Thông tin khác
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