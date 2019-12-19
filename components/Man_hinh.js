import React from 'react';
import { Dimensions, Image, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
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
import { PureComponent } from 'react';
const Icon = createIconSetFromIcoMoon(fontelloConfig);

import { Container, Content, Header, Body, Footer } from 'native-base';
var { width } = Dimensions.get("window");
const CustomNavigator = (props) => (
  <Container>
    <Header style={styles.header_customize}>
      <Body style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'column' }}>
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
          <Text style={styles.text_footer_customize}>Y BA ĐIỆN TỬ </Text>
          <Text style={styles.text_footer_customize_version}>(Phiên bản: 5.0.0)</Text>
        </View>
      </Body>
    </Footer>
  </Container>
)
const routeConfigs = {

  Man_hinh_ABOUT: {
    screen: ABOUT,
    navigationOptions: {
      drawerLabel: "Thông tin cá nhân",
      drawerIcon: ({ }) => (
        <View>
          <Icon name="settings" color="green" size={20} />
        </View>
      ),
    }
  },
  Man_hinh_DOIMK: {
    screen: DOIMK,
    navigationOptions: {
      drawerLabel: "Đổi mật khẩu",
      drawerIcon: ({ }) => (
        <View>
          <Icon name="lock" color="red" size={20} />
        </View>
      ),
    }
  },
  Man_hinh_Tracuuttkcb: {
    screen: Tracuuttkcb,
    navigationOptions: {
      drawerLabel: "Tra cứu khám chữa bệnh",
      drawerIcon: ({ }) => (
        <View>
          <Icon name="search" color="green" size={20} />
        </View>
      ),
    }
  },
  Man_hinh_HSSKBD: {
    screen: HSSKBD,
    navigationOptions: {
      drawerLabel: "Hồ sơ sức khỏe ban đầu",
      drawerIcon: ({ }) => (
        <View>
          <Icon name="paste" color="blue" size={25} />
        </View>
      ),
    }
  },
  Man_hinh_DKKBTX: {
    screen: DKKBTX,
    navigationOptions: {
      drawerLabel: "Đăng ký khám bệnh từ xa",
      drawerIcon: ({ }) => (
        <View>
          <Icon name="playlist_add_check" color="red" size={25} />
        </View>
      ),
    }
  },
  Man_hinh_NBTTTN: {
    screen: NBTTTN,
    navigationOptions: {
      drawerLabel: "Người bệnh tự theo dõi tại nhà",
      drawerIcon: ({ }) => (
        <View>
          <Icon name="feed" color="blue" size={20} />
        </View>
      ),
    }
  },

  Man_hinh_CSSKTM: {
    screen: CSSKTM,
    navigationOptions: {
      drawerLabel: "Chăm sóc sức khỏe trẻ em",
      drawerIcon: ({ }) => (
        <View>
          <Icon name="health" color="green" size={25} />
        </View>
      ),
    }
  },

  Man_hinh_CSSPNCT: {
    screen: CSSPNCT,
    navigationOptions: {
      drawerLabel: "Chăm sóc sức khỏe phụ nữ có thai",
      drawerIcon: ({ }) => (
        <View>
          <Icon name="health" color="red" size={25}/>
        </View>
      ),
    }
  },
  Logout: {
    screen: Logout,
    navigationOptions: {
      drawerLabel: "Đăng xuất",
      drawerIcon: ({ }) => (
        <View>
          <Icon name="switch" color="red"size={20} />
        </View>
      ),
    }
  }

};

const drawerNavigatorConfig = {

  initialRouteName: "Man_hinh_ABOUT",
  contentComponent: CustomNavigator,
  drawerWidth: "90%",
  drawerPosition: "left",
  contentOptions: {
    activeTintColor: "red",
  },
};

const Thuc_don_Slider = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);
const App = createAppContainer(Thuc_don_Slider);
export default App 