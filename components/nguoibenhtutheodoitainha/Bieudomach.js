import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from "./../css";
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import { LineChart } from 'react-native-chart-kit';

var dateformat = require('dateformat')
export default class app extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Biểu đồ mạch",
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
            data: [],
            data2: []
        }


    }
    componentDidMount() {
        let data = []
        let data2 = []
        AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
            if (result != null) {
                let JSON_DATA = JSON.parse(result)
                this.setState({
                    maBn: JSON_DATA.maBn
                })
                fetch('http://27.72.76.115:8181/api/tuong-tac/get-all-mach/' + JSON_DATA.maBn)
                    .then((response) => response.json())
                    .then((responseData) => {
                        responseData.sort((a, b) => {
                            return Number(b.ngay) - Number(a.ngay)
                        })
                        responseData.forEach((element, index) => {
                            if(index<=3){
                                data.push(dateformat(element.ngay, 'dd-mm-yyyy HH:MM'))
                                data2.push(element.mach)
                            }
                            
                        });
                        this.setState({ data: data, data2: data2 })
                    })

            }
        });
    }
    render() {
        if (this.state.data.length != 0 && this.state.data2.length != 0) {
            return (
                <View style={styles.container2}>
                    <ScrollView>
                        <View style={styles.container_about}>
                            <View style={styles.column_875}>
                                <Text style={styles.text_877}>
                                    Biểu đồ mạch 4 ngày gần nhất
                            </Text>
                            </View>
                        </View>
                        <ScrollView horizontal={true}
                            decelerationRate={0}>
                            <LineChart
                                data={{
                                    labels: this.state.data,
                                    datasets: [
                                        {
                                            data: this.state.data2,
                                        },
                                    ],
                                }}
                                width={Dimensions.get('window').width}
                                height={Dimensions.get('window').height/2}
                                fromZero={true}
                                verticalLabelRotation={15}
                                chartConfig={{
                                    backgroundColor: '#1cc910',
                                    backgroundGradientFrom: '#eff3ff',
                                    backgroundGradientTo: '#efefef',
                                    decimalPlaces: 1,
                                    color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                                  
                                }}
                                bezier
                                style={{
                                    marginVertical: 6,
                                    borderRadius: 5,
                                }}
                            />

                        </ScrollView>
                    </ScrollView>
                </View>
            )
        } else {
            return (
                <View style={styles.container2}>
                    <ScrollView>
                        <View style={styles.container_about}>
                            <View style={styles.column_875}>
                                <Text style={styles.text_877}>
                                    Biểu đồ mạch
                            </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            )
        }
    }
}