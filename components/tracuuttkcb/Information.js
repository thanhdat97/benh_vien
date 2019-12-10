import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./../css";
import Heading from './../../Header'
import { ScrollView } from 'react-native-gesture-handler';
var dateformat = require('dateformat')
export default class INFORAMTION extends Component {
    static navigationOptions = {
        header: null
    }
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
                <Heading />
                <View style={styles.container_about}>
                    <View style={styles.column_875}>
                        <Text style={styles.text_877}>
                            Thông tin Khám chữa bệnh
                        </Text>
                        <Text style={styles.text_877}>
                            Ngày khám chữa bệnh: {this.state.ngayKham}
                        </Text>
                        <ScrollView>
                            <TouchableOpacity onPress={this.XL_Chon.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={require('./../../images/thong_tin_hanh_chinh.png')}></Image>
                                <Text style={styles.text_87121}>
                                    Thông tin hành chính
                             </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon2.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={require('./../../images/thong_tin_kham_chua_benh.png')}></Image>
                                <Text style={styles.text_8712}>
                                    Thông tin khám chữa bệnh
                             </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon3.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={require('./../../images/don_thuoc.png')}></Image>
                                <Text style={styles.text_87123}>
                                    Đơn thuốc
                             </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon4.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={require('./../../images/ket_qua_xet_nghiem.png')}></Image>
                                <Text style={styles.text_87121}>
                                    Kết quả xét nghiệm
                             </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon5.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={require('./../../images/ket_qua_cdha_tdcn.png')}></Image>
                                <Text style={styles.text_871212}>
                                    KẾT QUẢ CHẨN ĐOÁN HÌNH ẢNH – THĂM DÒ CHỨC NĂNG
                             </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon6.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={require('./../../images/ket_qua_phim.png')}></Image>
                                <Text style={styles.text_8712}>
                                    Kết quả chụp phim
                             </Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>

            </View>
        )
    }
}