import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import Information from './Information';
import Mach from './mach';
import Historymach from './historymach';
import Bieudomach from './Bieudomach';
import Huyetap from './huyetap';
import Historyhuyetap from './historyhuyetap';
import Bieudohuyetap from './Bieudohuyetap';
import Nhietdo from './nhietdo';
import Historynhietdo from './historynhietdo';
import Bieudonhietdo from './Bieudonhietdo';
import Duongmau from './duongmau';
import Historyduongmau from './historyduongmau';
import Bieudoduongmau from './Bieudoduongmau';
import Hba1c from './hba1c';
import Historyhba1c from './historyhba1c';
import Bieudohba1c from './Bieudohba1c';
import ACT from './act';
import Historyact from './historyact';
import Bieudoact from './Bieudoact';

const Man_hinh = createStackNavigator({
    Man_hinh_Information: {
        screen: Information,
    },
    Man_hinh_Mach: {
        screen: Mach,
    },
    Man_hinh_historyMach: {
        screen: Historymach,
    },
    Man_hinh_bieudoMach: {
        screen: Bieudomach,
    },
    Man_hinh_Huyetap: {
        screen: Huyetap,
    },
    Man_hinh_historyhuyetap: {
        screen: Historyhuyetap,
    },
    Man_hinh_bieudohuyetap: {
        screen: Bieudohuyetap,
    },
    Man_hinh_Nhietdo: {
        screen: Nhietdo,
    },
    Man_hinh_historynhietdo: {
        screen: Historynhietdo,
    },
    Man_hinh_bieudonhietdo: {
        screen: Bieudonhietdo,
    },
    Man_hinh_Duongmau: {
        screen: Duongmau,
    },
    Man_hinh_historyduongmau: {
        screen: Historyduongmau,
    },
    Man_hinh_bieudoduongmau: {
        screen: Bieudoduongmau,
    },
    Man_hinh_Hba1c: {
        screen: Hba1c,
    },
    Man_hinh_historyhba1c: {
        screen: Historyhba1c,
    },
    Man_hinh_bieudohba1c: {
        screen: Bieudohba1c,
    },
    Man_hinh_ACT: {
        screen: ACT,
    },
    Man_hinh_historyact: {
        screen: Historyact,
    },
    Man_hinh_bieudoact: {
        screen: Bieudoact,
    },
});
const App = createAppContainer(Man_hinh);

export default class Chinh extends Component {

    render() {
        return (
            <App />
        );
    }
}
