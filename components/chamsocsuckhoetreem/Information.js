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
        this.props.navigation.navigate("Man_hinh_Theodoitangtruong")
    }
    render() {

        return (
            <View style={styles.container2}>
                <Heading />
                <View style={styles.container_about}>
                    <View style={styles.column_875}>
                        <ScrollView>
                            <TouchableOpacity onPress={this.XL_Chon.bind(this)} style={styles.text_875}>
                                <Image style={styles.image_ql2} resizeMode='cover' source={{ uri: "https://benhvienvietmy.herokuapp.com/theodoitangtruong.png" }}></Image>
                                <Text style={styles.text_87121}>
                                    Theo dõi tăng trưởng
                                </Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>

            </View>
        )
    }
}