import React, {Component} from 'react';
import Login from './components/login';
import Man_hinh_Menu from './components/Man_hinh';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage'

const Man_hinh = createStackNavigator({
    Man_hinh_login: {
        screen: Login,
    },
    Man_hinh_Menu: {
        screen: Man_hinh_Menu,
        navigationOptions: {
            header: null
        }
    },
});
const App = createAppContainer(Man_hinh);
export default App
       
  