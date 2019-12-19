import React, { Component } from 'react';
import { View} from 'react-native';
import Heading from "./../Header";
import styles from "./css";
import MH_ABOUT_INFORMATION from './MH_ABOUT_INFORMATION'

export default class app extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);

        this.state = {
            Ma_so: '',
            Ten: '',
            SDT: '',
            EMAIL: '',
            Quyen: '',
            Ten_Dang_nhap: '',
            Mat_khau: '',
            SOIMAGE: '',
            Count: null
        }

    }
  

    render() {
        
        return (
            <View style={styles.container}>
                <Heading />
                <MH_ABOUT_INFORMATION />
            </View>
        )
    }
}