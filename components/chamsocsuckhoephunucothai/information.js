import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modalbox';
import styles from './../css';
import LinearGradient from 'react-native-linear-gradient';

export default class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            navigation: ''
        };
    }
    Mo_hop_thoaithongtin(item, navigation) {
        this.setState({ item: item, navigation: navigation })
        this.refs.Th_Hop_thoai_thongtin.open();
    }
    XL_Chon() {
        this.state.navigation.navigate("Man_hinh_YTNC", { "DT": this.state.item })
        this.refs.Th_Hop_thoai_thongtin.close()
    }
    XL_Chon2() {
        this.state.navigation.navigate("Man_hinh_LSKT", { "DT": this.state.item })
        this.refs.Th_Hop_thoai_thongtin.close()
    }
    render() {
        return (
            <Modal ref={'Th_Hop_thoai_thongtin'} style={styles.modal} position='center' backdrop={true}>
                <ScrollView>
                    <View style={styles.column_875}>
                        <Text style={styles.text_877}>
                            Chọn chức năng
                    </Text>
                        <View style={styles.row_linear_act}>
                            <View style={styles.linear3}>
                                <TouchableOpacity onPress={this.XL_Chon.bind(this)} activeOpacity={0.5}>
                                    <LinearGradient colors={['#3B69C7', '#3B69C7']} style={styles.linearGradient_327567act}>
                                        <Text style={styles.buttonText}>Yếu tố nguy cơ</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.linear3}>
                                <TouchableOpacity onPress={this.XL_Chon2.bind(this)} activeOpacity={0.5}>
                                    <LinearGradient colors={['#3B69C7', '#3B69C7']} style={styles.linearGradient_327567act}>
                                        <Text style={styles.buttonText}>Lịch sử khám thai</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Modal>
        );
    }
}
