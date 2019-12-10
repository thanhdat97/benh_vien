import  { Component } from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

class Logout extends Component {
    constructor(props) {
        super(props);

     }

     componentWillMount() {
         Alert.alert(
            'Thông báo',
            'Đăng xuất thành công', [
                {
                    text: "OK", onPress: () => {
                        AsyncStorage.removeItem('DATA_LOGIN')

                        this.props.navigation.navigate("Man_hinh_login")
                    }
                }
            ]
         )
    }
    render(){
        return null
    }
}
export default Logout;