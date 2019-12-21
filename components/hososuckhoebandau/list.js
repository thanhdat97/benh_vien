import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
import Information  from './Information';
import TTTC  from './tttc';
import SKCN  from './skcn';
import SKGD  from './skgd';
import SKSS  from './skss';
import SKK  from './thongtinkhac';

const Man_hinh = createStackNavigator({
    Man_hinh_Information: {
        screen: Information,
    },
    Man_hinh_TTTC: {
        screen: TTTC,
    },
    Man_hinh_SKCN: {
        screen: SKCN,
    },
    Man_hinh_SKGD: {
        screen: SKGD,
    },
    Man_hinh_SKSS: {
        screen: SKSS,
    },
    Man_hinh_SKK: {
        screen: SKK,
    },
});
const App= createAppContainer(Man_hinh);    

export default App 