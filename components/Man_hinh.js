import React from 'react';
import { Dimensions, Image, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import ABOUT from './MH_ABOUT';
import Logout from './logout';
import DOIMK from './DOIMK';
import Tracuuttkcb from './tracuuttkcb/list';

import Menu from './customizemenu'
import { Container, Content, Header, Body, Footer } from 'native-base';
var { width } = Dimensions.get("window");
const CustomNavigator = (props) => (
  <Container>
    <Header style={{ height: 120}}>
      <Body style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'column' }}>
           <Menu />
        </View>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
    <Footer style={{ height: 30}}>
      <Body style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View style={{justifyContent:'center'}}>
          <Text style={{ color: 'white',textAlign:'center',fontWeight:"bold"  }}>Y BA ĐIỆN TỬ </Text>
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
        <Image
          source={require('./../images/user_login.png')}
          style={{ width: 26, height: 26 }}
        />
      ),
    }
  },
  Man_hinh_DOIMK: {
    screen: DOIMK,
    navigationOptions: {
      drawerLabel: "Quản lý thông tin tài khoản",
      drawerIcon: ({ }) => (
        <Image
          source={require('./../images/resetpassword1.png')}
          style={{ width: 26, height: 26 }}
        />
      ),
    }
  },
  Man_hinh_Tracuuttkcb: {
    screen: Tracuuttkcb,
    navigationOptions: {
      drawerLabel: "Tra cứu khám chữa bệnh",
      drawerIcon: ({ }) => (
        <Image
          source={require('./../images/tracuukcb.png')}
          style={{ width: 26, height: 26 }}
        />
      ),
    }
  }, 
  Logout: {
    screen: Logout,
    navigationOptions: {
      drawerLabel: "Đăng xuất",
      drawerIcon: ({ }) => (
        <Image
          source={require('./../images/logout.png')}
          style={{ width: 26, height: 26 }}
        />
      ),
    }
  }

};

const drawerNavigatorConfig = {

  initialRouteName: "Man_hinh_ABOUT",
  contentComponent: CustomNavigator,
  drawerWidth: width * 3 / 4,
  drawerPosition: "left",
  contentOptions: {
    activeTintColor: "red",
  },
};

const Thuc_don_Slider = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);
const App = createAppContainer(Thuc_don_Slider);
export default App 