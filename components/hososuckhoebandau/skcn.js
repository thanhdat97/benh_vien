import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions, Alert, ScrollView } from 'react-native';
import styles from './../css';
import AsyncStorage from '@react-native-community/async-storage'
import { Table, Row } from 'react-native-table-component';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../../android/app/src/main/assets/selection.json';
const Icon = createIconSetFromIcoMoon(fontelloConfig);
var { width } = Dimensions.get("window");

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: [this.props.item.key, this.props.item.value],

        }
    }
    render() {
        if (this.props.item.isTitle == true) {
            let tableHead = [this.props.item.key]
            return (
                <View style={styles.container_table2}>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={tableHead} style={{
                            height: 50, width: width, backgroundColor: this.props.item.isTitle == true ? "green"
                                : this.props.index % 2 == 0 ? "#fff" : "#e6e5e5"
                        }} textStyle={styles.text2} />
                    </Table>
                </View>
            );
        } else {
            return (
                <View style={styles.container_table2}>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={this.state.tableHead} style={{
                            height: 50, width: width, backgroundColor: this.props.item.isTitle == true ? "green"
                                : this.props.index % 2 == 0 ? "#fff" : "#e6e5e5"
                        }} textStyle={styles.text} />
                    </Table>
                </View>
            );
        }
    }
}

export default class Danh_sach_PH extends Component {

    static navigationOptions = ({ navigation }) => {

        return {
            title: "Thông tin sức khỏe cá nhân",
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
        super(props)
        this.state = {
            Danh_sach_ph: null,
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
            let JSON_DATA = JSON.parse(result)
            this.setState({
                Ma_bn: JSON_DATA.maBn
            })
            fetch('http://27.72.76.115:8181/api/ho-so-sk-ban-dau/get-thong-tin-suc-khoe-ca-nhan/' + JSON_DATA.maBn)
                .then((response) => response.json())
                .then((responseData) => {
                    if (responseData.status != 500) {
                        this.setState({
                            Danh_sach_ph: responseData
                        })
                    }else{
                        this.setState({
                            Danh_sach_ph:[]
                        })
                    }
                })
        })
    }
    XL_Chon7() {
        this.props.navigation.navigate("Man_hinh_chinh")
    }

    render() {
        if (this.state.Danh_sach_ph != null) {
            if (this.state.Danh_sach_ph.length != 0) {
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
                                        Thông tin súc khỏe cá nhân
                                    </Text>
                                    <View style={styles.container_about2}>
                                        <FlatList
                                            ref={'Danh_sach_ph'}
                                            data={this.state.Danh_sach_ph}
                                            keyExtractor={(item) => item.key}
                                            renderItem={({ item, index }) => {

                                                return (
                                                    <TouchableOpacity activeOpacity={0.5}>
                                                        <FlatListItem item={item} index={index} navigation={this.props.navigation} parentFlatList={this}></FlatListItem>
                                                    </TouchableOpacity>
                                                );
                                            }}>
                                        </FlatList>

                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                );
            } else {
                return (
                    <View style={styles.container}>
                        <View style={styles.go_back_home}>
                            <TouchableOpacity onPress={this.XL_Chon7.bind(this)} activeOpacity={0.5}>
                                <Icon name="home" color="#3B69C7" size={35} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container_about}>
                            <View style={styles.column_875}>
                                <Text style={styles.text_877}>
                                    Thông tin sức khỏe cá nhân
                                </Text>
                                <Text style={styles.text_877}>
                                    Hiện không có thông tin
                            </Text>
                            </View>
                        </View>
                    </View>
                );
            }
        } else {
            return null
        }
    }
}

