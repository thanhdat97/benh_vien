import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import styles from "./../css";
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../../android/app/src/main/assets/selection.json';
const Icon = createIconSetFromIcoMoon(fontelloConfig);
var dateformat = require('dateformat')
export default class app extends Component {
    static navigationOptions = ({ navigation }) => {

        return {
            title: "KẾT QUẢ CHỤP PHIM "+dateformat(navigation.state.params.DT.ngay, 'dd/mm/yyyy'),
            headerStyle: {
                backgroundColor: '#3F51B5',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 16
            }
        };
    };
    constructor(props) {
        super(props);
        let DT = this.props.navigation.state.params.DT;

        this.state = {
            ngayKham: dateformat(DT.ngay, 'dd/mm/yyyy'),
            link: DT.link,
            Danh_sach_ph: []
        }
    }
    XL_Chon7() {
        this.props.navigation.navigate("Man_hinh_chinh")
    }
    render() {
        return (
            <View style={styles.container}>
                <WebView source={{ uri: this.state.link }} />
            </View>
        )
    }
}