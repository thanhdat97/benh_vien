import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
import Information  from './Information';
import TDTT  from './theodoitangtruong';
import Historytangtruong  from './historytangtruong';

const Man_hinh = createStackNavigator({
    Man_hinh_Information: {
        screen: Information,
    },
    Man_hinh_Theodoitangtruong: {
        screen: TDTT,
    },
    Man_hinh_historytangtruong: {
        screen: Historytangtruong,
    },
   
});
const App= createAppContainer(Man_hinh);    

export default class Chinh extends Component{

    render(){
        return(
            <App />
        );
    }
}
