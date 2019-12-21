import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import styles from "./../css";
import { Table, Row, Rows } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import LinearGradient from 'react-native-linear-gradient';


export default class app extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Lịch sử theo dõi tăng trưởng",
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


        this.state = {
            tableHead: ['Tháng Tuổi', 'Cân Nặng'],
            tableData: [],
        }


    }
    XL_Chon() {
        this.props.navigation.navigate("Man_hinh_bieudo")
    }
    componentDidMount() {
        let tableData = []
        AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
            if (result != null) {
                let JSON_DATA = JSON.parse(result)
                this.setState({
                    maBn: JSON_DATA.maBn
                })
                fetch('http://27.72.76.115:8181/api/tuong-tac/get-all-tang-truong/' + JSON_DATA.maBn)
                    .then((response) => response.json())
                    .then((responseData) => {
                        responseData.forEach(element => {
                            tableData.push([element.thang, element.canNang])
                        });
                        this.setState({ tableData: tableData })
                    })
            }
        });
    }
    render() {

        return (
            <View style={styles.container2}>
                <ScrollView>
                    <View style={styles.container_about}>
                        <View style={styles.column_875}>
                            <Text style={styles.text_877}>
                                Lịch sử tăng trưởng
                            </Text>
                        </View>
                    </View>
                    <View style={styles.container_table}>
                        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                            <Row data={this.state.tableHead} style={styles.headact} textStyle={styles.text} />
                            <Rows data={this.state.tableData} style={styles.dataact} textStyle={styles.text} />
                        </Table>
                    </View>
                    <View style={styles.wrap_linear_hs_act}>
                        <TouchableOpacity onPress={this.XL_Chon.bind(this)} activeOpacity={0.5}>
                            <LinearGradient colors={['#3B69C7', '#3B69C7']} style={styles.linearGradient_327567}>
                                <Text style={styles.buttonText}>Biểu đồ</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}