import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, Alert } from 'react-native';
import styles from './../css';
import AsyncStorage from '@react-native-community/async-storage'
import Information from './information';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../../android/app/src/main/assets/selection.json';
const Icon = createIconSetFromIcoMoon(fontelloConfig);
var { width } = Dimensions.get("window");

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Ma_ph: '',
            So: 0
        }

    }
    XL_Chon() {
        this.props.parentFlatList.refs.Th_Thong_tin.Mo_hop_thoaithongtin(this.props.item, this.props.navigation);
    }
    render() {
        return (

            <View style={styles.container2}>
                <View style={styles.container_about}>
                    <View style={styles.column_875}>
                        <Text style={styles.text_877}>
                            Theo dõi sức khỏe trẻ em => Theo dõi tăng trưởng
                        </Text>
                        <TouchableOpacity onPress={this.XL_Chon.bind(this)} activeOpacity={0.5}>
                            <View style={styles.wrap_thongtinkhamchuabenh}>
                                <View style={styles.icon_thongtinkhamchuabenh}>
                                    <Icon name="filter_2" color="green" size={35} />
                                </View>
                                <Text style={styles.text_thongtinkhamchuabenh}>
                                    Lần sinh thứ: {this.props.item.lanSinh}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor: "#e6e5e5" }}></View>
            </View >
        );
    }
}

export default class Danh_sach_PH extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            Danh_sach_ph: [],
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
            let JSON_DATA = JSON.parse(result)
            this.setState({
                Ma_bn: JSON_DATA.maBn
            })
            fetch('http://27.72.76.115:8181/api/tuong-tac/get-all-lan-sinh/' + JSON_DATA.maBn)
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState({
                        Danh_sach_ph: responseData
                    })
                })
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text_user}>Lần sinh</Text>
                </View>

                <View style={styles.container_about2}>
                    <FlatList
                        ref={'Danh_sach_ph'}
                        data={this.state.Danh_sach_ph}
                        keyExtractor={(item) => item.lanSinh}
                        renderItem={({ item, index }) => {

                            return (
                                <TouchableOpacity activeOpacity={0.5}>
                                    <FlatListItem item={item} index={index} navigation={this.props.navigation} parentFlatList={this}></FlatListItem>
                                </TouchableOpacity>
                            );
                        }}>
                    </FlatList>
                    <Information ref={'Th_Thong_tin'} parentFlatList={this}></Information>

                </View>
            </View>
        );
    }
}

