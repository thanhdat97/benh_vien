import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, Alert } from 'react-native';
import styles from './../css';
import AsyncStorage from '@react-native-community/async-storage'
var dateformat=require('dateformat')

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
        this.props.navigation.navigate("Man_hinh_Information", { "DT": this.props.item})
    }
    render() {
        return (

            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{
                    flex: 1, flexDirection: "row", backgroundColor: this.props.index % 2 == 0 ? "#fff" : "#fff"
                }}>
                     <Image style={styles.image_ql} resizeMode='contain' source={require('./../../images/calendar.png')}></Image>
                    <TouchableOpacity onPress={this.XL_Chon.bind(this)} activeOpacity={0.5} style={styles.content}>
                        <View style={{ flex: 1, flexDirection: "column", justifyContent: 'center', paddingBottom: 5, paddingTop: 5, }}>
                            <Text style={styles.itemText}>Ngày khám: {dateformat(this.props.item.ngayKham,"dd/mm/yyyy")}</Text>
                            <Text style={styles.itemText}>Giờ khám: {dateformat(this.props.item.ngayKham,"HH:MM")}</Text>

                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 1, backgroundColor: "#e6e5e5" }}></View>
            </View>
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
                Ma_bn:JSON_DATA.maBn
            })
            fetch('http://27.72.76.115:8181/api/lich-su-kham-benh/get-all/'+JSON_DATA.maBn)
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
                        <Text style={styles.text_user}>Tra cứu thông tin khám chữa bệnh </Text>
                    </View>
                    
                    <View style={styles.container_about2}>
                        <FlatList
                            ref={'Danh_sach_ph'}
                            data={this.state.Danh_sach_ph}
                            keyExtractor={(item) => item.maLanKham}
                            renderItem={({ item, index }) => {

                                return (
                                    <TouchableOpacity  activeOpacity={0.5}>
                                        <FlatListItem item={item} index={index} navigation={this.props.navigation} parentFlatList={this}></FlatListItem>
                                    </TouchableOpacity>
                                );
                            }}>
                        </FlatList>

                    </View>
            </View>
        );
    }
}

