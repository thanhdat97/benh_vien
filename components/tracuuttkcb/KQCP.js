import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import styles from "./../css";
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../../android/app/src/main/assets/selection.json';
const Icon = createIconSetFromIcoMoon(fontelloConfig);
var dateformat = require('dateformat')
export default class app extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Kết quả chụp phim",
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
            link: ''
        }
    }
    componentDidMount() {
        fetch('http://27.72.76.115:8181/api/phim/get-all/' + this.state.malankham)
            .then((response) => response.json())
            .then((responseData) => {
                responseData.forEach(element => {
                    this.setState({ link: element.link })

                });
            })
    }
    XL_Chon7() {
        this.props.navigation.navigate("Man_hinh_chinh")
    }
    render() {
        if (this.state.link.length != 0) {
            return (
                <WebView source={{ uri: this.state.link }} />
            );
        } else if (this.state.link.length == 0) {
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
                                    Không có kết quả
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            );
        } else {
            return (
                null
            );
        }
    }
}