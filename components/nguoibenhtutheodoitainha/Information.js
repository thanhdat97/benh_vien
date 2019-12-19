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
        this.props.navigation.navigate("Man_hinh_Mach")
    }
    XL_Chon2() {
        this.props.navigation.navigate("Man_hinh_Huyetap")
    }
    XL_Chon3() {
        this.props.navigation.navigate("Man_hinh_Nhietdo")
    }
    XL_Chon4() {
        this.props.navigation.navigate("Man_hinh_Duongmau")
    }
    XL_Chon5() {
        this.props.navigation.navigate("Man_hinh_Hba1c")
    }
    XL_Chon6() {
        this.props.navigation.navigate("Man_hinh_ACT")
    }
    render() {

        return (
            <View style={styles.container2}>
                <Heading />
                <View style={styles.container_about}>
                    <View style={styles.column_875}>
                        <Text style={styles.text_877}>
                            Người bệnh tự theo dõi tại nhà
                        </Text>
                        <ScrollView>
                            <TouchableOpacity onPress={this.XL_Chon.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="health1" color="green" size={35} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Mạch
                             </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon2.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="heartbeat" color="green" size={35} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Huyết áp
                             </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon3.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="thermometer-3" color="green" size={35} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Nhiệt độ
                             </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon4.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="heart2" color="green" size={35} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Đường máu
                             </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon5.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="lab2" color="green" size={35} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Hba1C
                             </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon6.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="beaker" color="green" size={35} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Test ACT
                             </Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>

            </View>
        )
    }
}