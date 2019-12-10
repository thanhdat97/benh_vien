import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from 'prop-types'
import styles from './components/css'

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
                <View style={styles.container_header}>
                    <Text style={styles.header}>{this.props.message}</Text>
                </View>
            )
        
    }
}

Heading.propTypes = {
    message: PropTypes.string,
}
Heading.defaultProps = {
    message: 'Y BẠ ĐIỆN TỬ VIỆT MỸ',
}



