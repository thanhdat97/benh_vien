import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./../css";
import Heading from './../../Header'
import { ScrollView } from 'react-native-gesture-handler';
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
                        <ScrollView>
                            <TouchableOpacity onPress={this.XL_Chon.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={{ uri: "https://benhvienvietmy.herokuapp.com/mach.png"}}></Image>
                                <Text style={styles.text_87121}>
                                    Mạch
                             </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon2.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={{ uri: "https://benhvienvietmy.herokuapp.com/huyetap.png"}}></Image>
                                <Text style={styles.text_8712}>
                                    Huyết áp
                             </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon3.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={{ uri: "https://benhvienvietmy.herokuapp.com/nhietdo.png"}}></Image>
                                <Text style={styles.text_8712}>
                                   Nhiệt độ
                             </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon4.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={{ uri: "https://benhvienvietmy.herokuapp.com/duongmau.png"}}></Image>
                                <Text style={styles.text_8712}>
                                    Đường máu
                             </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon5.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={{ uri: "https://benhvienvietmy.herokuapp.com/hba1c.png"}}></Image>
                                <Text style={styles.text_8712}>
                                    Hba1C
                             </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon6.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={{ uri: "https://benhvienvietmy.herokuapp.com/act.png"}}></Image>
                                <Text style={styles.text_8712}>
                                    Test ACT
                             </Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>

            </View>
        )
    }
}