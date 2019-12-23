import React, {Component} from 'react';
import Tracuuttkcb  from './tracuuttkcb';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
import Information  from './Information';
import Medical from './medical'
import DONTHUOC from './donthuoc'
import KQXN from './kqxn'
import CDHATDCN from './CDHATDCN'
import KQCP from './KQCP'
import Chupphim from './chupphim'

const Man_hinh = createStackNavigator({
    Man_hinh_Tracuuttkcb: {
        screen: Tracuuttkcb,
    },
    Man_hinh_Information: {
        screen: Information,
    },

    Man_hinh_Medical: {
        screen: Medical,
    },
    Man_hinh_DONTHUOC: {
        screen: DONTHUOC,
    },
    Man_hinh_KQXN: {
        screen: KQXN,
    },
    Man_hinh_CDHATDCN: {
        screen: CDHATDCN,
    },
    Man_hinh_KQCP: {
        screen: KQCP,
    },
    Man_hinh_Information_chupphim:{
        screen: Chupphim,
    },
});
const App= createAppContainer(Man_hinh);    

export default App
