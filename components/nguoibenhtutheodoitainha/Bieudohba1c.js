import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import { WebView } from 'react-native-webview';

export default class app extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Biểu đồ Hba1C",
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
           maBn:''
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('DATA_LOGIN', (err, result) => {
            if (result != null) {
                let JSON_DATA = JSON.parse(result)
                this.setState({
                    maBn: JSON_DATA.maBn
                })

            }
        });
    }
    render() {
        return (
            <WebView source={{ uri: 'https://hososuckhoedientuvietmy.vn/dang-ky-kham-benh/bieudohba1capp/?benhnhan=' + this.state.maBn }} />
        )

    }
}