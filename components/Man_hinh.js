import React, { Component } from 'react';
import { Dimensions, Image, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import ABOUT from './MH_ABOUT';
import Logout from './logout';
import DOIMK from './DOIMK';
import Tracuuttkcb from './tracuuttkcb/list';
import HSSKBD from './hososuckhoebandau/list';
import DKKBTX from './dangkykhambenhtuxa/dangkykhambenhtuxa';
import NBTTTN from './nguoibenhtutheodoitainha/list';
import CSSKTM from './chamsocsuckhoetreem/list';
import Menu from './customizemenu'
import CSSPNCT from './chamsocsuckhoephunucothai/list';
import styles from './css';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../android/app/src/main/assets/selection.json';
import Man_hinh_chinh from './Man_hinh_chinh';

const Icon = createIconSetFromIcoMoon(fontelloConfig);

import { Container, Content, Header, Body, Footer } from 'native-base';
var { width } = Dimensions.get("window");
const CustomNavigator = (props) => (
  <Container>
    <Header style={styles.header_customize}>
      <Body style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'column', }}>
          <Menu />
        </View>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
    <Footer style={styles.footer_customize}>
      <Body style={styles.body_wrap_footer_customize}>
        <View style={styles.wrap_footer_customize}>
          <Text style={styles.text_footer_customize}>Y BA ĐIỆN TỬ VIỆT MỸ </Text>
          <Text style={styles.text_footer_customize_version}>(Phiên bản: 1.0.0)</Text>
        </View>
      </Body>
    </Footer>
  </Container>
)
const routeConfigs = {
  Man_hinh_chinh: {
    screen: Man_hinh_chinh,
  },
  Man_hinh_ABOUT: {
    screen: ABOUT,
  },
  Man_hinh_DOIMK: {
    screen: DOIMK,
  },
  Man_hinh_Tracuuttkcb: {
    screen: Tracuuttkcb,
    navigationOptions: {
      header: null
    }
  },
  Man_hinh_HSSKBD: {
    screen: HSSKBD,
    navigationOptions: {
      header: null
    }
  },
  Man_hinh_DKKBTX: {
    screen: DKKBTX,
  },
  Man_hinh_NBTTTN: {
    screen: NBTTTN,
    navigationOptions: {
      header: null
    }
  },

  Man_hinh_CSSKTM: {
    screen: CSSKTM,
    navigationOptions: {
      header: null
    }
  },

  Man_hinh_CSSPNCT: {
    screen: CSSPNCT,
    navigationOptions: {
      header: null
    }
  },
  Logout: {
    screen: Logout,
    navigationOptions: {
      header: null
    }
  }

};

const drawerNavigatorConfig = {

  initialRouteName: "Man_hinh_chinh",
  contentComponent: CustomNavigator,
  drawerWidth: "90%",
  drawerPosition: "left",
  contentOptions: {
    activeTintColor: "red",
  },
};

const Thuc_don_Slider = createStackNavigator(routeConfigs, drawerNavigatorConfig);
const App = createAppContainer(Thuc_don_Slider);
export default App

