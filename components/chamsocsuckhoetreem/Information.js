import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./../css";
import Heading from './../../Header'
import { ScrollView } from 'react-native-gesture-handler';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../../android/app/src/main/assets/selection.json';
const Icon = createIconSetFromIcoMoon(fontelloConfig);
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
    XL_Chon7() {
        this.props.navigation.navigate("Man_hinh_chinh")
    }
    render() {

        return (
            <View style={styles.container2}>
                <Heading navigation={this.props.navigation} message={' Theo dõi sức khỏe trẻ em'}/>
                <View style={styles.go_back_home}>
                    <TouchableOpacity onPress={this.XL_Chon7.bind(this)} activeOpacity={0.5}>
                        <Icon name="home" color="#3B69C7" size={35} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.container_about}>
                        <View style={styles.column_875}>
                            <Text style={styles.text_877}>
                                Theo dõi tăng trưởng
                             </Text>
                            <TouchableOpacity onPress={this.XL_Chon.bind(this)}>
                                <View style={styles.wrap_thongtinkhamchuabenh}>
                                    <View style={styles.icon_thongtinkhamchuabenh}>
                                        <Icon name="information" color="green" size={35} />
                                    </View>
                                    <Text style={styles.text_thongtinkhamchuabenh}>
                                        Theo dõi tăng trưởng
                                </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}