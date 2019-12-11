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
        this.props.navigation.navigate("Man_hinh_TTTC")
    }
    XL_Chon2() {
        this.props.navigation.navigate("Man_hinh_SKCN")
    }
    XL_Chon3() {
        this.props.navigation.navigate("Man_hinh_SKGD")
    }
    XL_Chon4() {
        this.props.navigation.navigate("Man_hinh_SKSS")
    }
    XL_Chon5() {
        this.props.navigation.navigate("Man_hinh_SKK")
    }
    render() {

        return (
            <View style={styles.container2}>
                <Heading />
                <View style={styles.container_about}>
                    <View style={styles.column_875}>
                        <ScrollView>
                            <TouchableOpacity onPress={this.XL_Chon.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={require('./../../images/thong_tin_hanh_chinh.png')}></Image>
                                <Text style={styles.text_87121}>
                                    Thông tin hành chính
                             </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon2.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={require('./../../images/suckhoecanhan.png')}></Image>
                                <Text style={styles.text_8712}>
                                    Thông tin sức khỏe cá nhân
                             </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon3.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={require('./../../images/suckhoegiadinh.png')}></Image>
                                <Text style={styles.text_8712}>
                                   Thông tin sức khỏe gia đình
                             </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon4.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={require('./../../images/suckhoesinhsan.png')}></Image>
                                <Text style={styles.text_8712}>
                                    Thông tin sức khỏe sinh sản
                             </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.XL_Chon5.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={require('./../../images/hososuckhoe.jpg')}></Image>
                                <Text style={styles.text_8712}>
                                    Thông tin khác
                             </Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>

            </View>
        )
    }
}