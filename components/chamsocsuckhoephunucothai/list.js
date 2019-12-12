import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
import Information  from './lansinh';
import YTNC  from './YTNC';
import LSKT  from './LSKT';

const Man_hinh = createStackNavigator({
    Man_hinh_Information: {
        screen: Information,
    },
    Man_hinh_YTNC: {
        screen: YTNC,
    },
    Man_hinh_LSKT: {
        screen: LSKT,
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
