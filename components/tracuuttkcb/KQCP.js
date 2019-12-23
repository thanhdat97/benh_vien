import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import styles from "./../css";
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../../android/app/src/main/assets/selection.json';
const Icon = createIconSetFromIcoMoon(fontelloConfig);
var dateformat = require('dateformat')
class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Ma_ph: '',
            So: 0
        }

    }
    XL_Chon() {
        this.props.navigation.navigate("Man_hinh_Information_chupphim", { "DT": this.props.item })
    }
    render() {
        return (

            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{
                    flex: 1, flexDirection: "row", backgroundColor: this.props.index % 2 == 0 ? "#fff" : "#fff"
                }}>
                    <View style={styles.wrap_icon_date_serach}>
                        <Icon name="clipboard" color="green" size={35} />
                    </View>
                    <TouchableOpacity onPress={this.XL_Chon.bind(this)} activeOpacity={0.5} style={styles.content}>
                        <View style={styles.wrap_icon_date_serach_text}>
                            <Text style={styles.itemText}>Ngày chụp phim: {dateformat(this.props.item.ngay, "dd/mm/yyyy")}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 1, backgroundColor: "#e6e5e5" }}></View>
            </View>
        );
    }
}
export default class app extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "DANH SÁCH PHIM",
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
            ngayKham: dateformat(DT.ngayKham, 'dd/mm/yyyy HH:MM'),
            malankham: DT.maLanKham,
            link: '',
            Danh_sach_ph: ''
        }
    }
    componentDidMount() {
        fetch('http://27.72.76.115:8181/api/phim/get-all/' + this.state.malankham)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({ Danh_sach_ph: responseData })
            })
    }
    XL_Chon7() {
        this.props.navigation.navigate("Man_hinh_chinh")
    }
    render() {
        if (this.state.Danh_sach_ph != '') {
            if (this.state.Danh_sach_ph.length != 0) {
                return (
                    <View style={styles.container}>
                        <View style={styles.go_back_home}>
                            <TouchableOpacity onPress={this.XL_Chon7.bind(this)} activeOpacity={0.5}>
                                <Icon name="home" color="#3B69C7" size={35} />
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            <View style={styles.container_about2}>
                                <FlatList
                                    ref={'Danh_sach_ph'}
                                    data={this.state.Danh_sach_ph}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item, index }) => {

                                        return (
                                            <TouchableOpacity activeOpacity={0.5}>
                                                <FlatListItem item={item} index={index} navigation={this.props.navigation} parentFlatList={this}></FlatListItem>
                                            </TouchableOpacity>
                                        );
                                    }}>
                                </FlatList>

                            </View>
                        </ScrollView>
                    </View>
                )
            } else {
                return (
                    <View style={styles.container}>
                        <View style={styles.go_back_home}>
                            <TouchableOpacity onPress={this.XL_Chon7.bind(this)} activeOpacity={0.5}>
                                <Icon name="home" color="#3B69C7" size={35} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.column_875}>
                            <Text style={styles.text_877}>
                                Hiện không có kết quả chụp phim
                             </Text>
                        </View>
                    </View>
                )
            }
        }else{
            return null
        }
    }
}