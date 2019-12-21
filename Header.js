import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from 'prop-types'
import styles from './components/css'
import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from './android/app/src/main/assets/selection.json';
import { TouchableOpacity } from "react-native-gesture-handler";

const Icon = createIconSetFromIcoMoon(fontelloConfig);
class MyCustomLeftComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => { this.props.navigation.openDrawer() }}>
                    <Icon name="menu" color="#fff" size={35} />
                </TouchableOpacity>
            </View>
        );
    }
}
class MyCustomCenterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render() {
        return (
            <View>
                <Text style={styles.text_header_1}>{this.props.message}</Text>
            </View>
        );
    }
}



export default class Heading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            So: new Date(),
            Count: null,
        }
    }
    render() {
        return (
            <Header
                containerStyle={{
                    backgroundColor: '#3D6DCC',
                    justifyContent: 'center',
                    height: 50,
                    paddingTop: 0,
                    paddingBottom: 5,
                }}
                placement="left"
                leftComponent={<MyCustomLeftComponent   navigation={this.props.navigation} />}
                centerComponent={<MyCustomCenterComponent message={this.props.message} />}
            />
        )
    }
}

Heading.propTypes = {
    message: PropTypes.string,
}
Heading.defaultProps = {
    message: 'Y BẠ ĐIỆN TỬ VIỆT MỸ',
}



