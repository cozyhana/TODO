import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { Login, Home, Content, About } from './src/page/index';
import AddressBooks2 from './src/static/svg/AddressBooks2.js';
import IdentityCheck from './src/static/svg/IdentityCheck.js';
import Bms from './src/static/svg/Bms.js';
// import { AddressBooks2, IdentityCheck, Bms } from './src/static/svg/index'

const TabNavigator = createBottomTabNavigator({
  // '计划': WeekPlan,
  'Home': {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页'
    }
  },
  'Content': {
    screen: Content,
    navigationOptions: {
      tabBarLabel: '内容'
    }
  },
  'About': {
    screen: About,
    navigationOptions: {
      tabBarLabel: '关于'
    }
  }
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const iconStyle = {
          width: 30,
          height: 30,
          fill: tintColor
        }
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = <IdentityCheck {...iconStyle} />
            break;
          case 'Content':
            iconName = <AddressBooks2 {...iconStyle} />
            break;
          case 'About':
            iconName = <Bms {...iconStyle} />
            break;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return iconName
      }
    }),
    tabBarOptions: {
      activeTintColor: '#ffbd00', // 活动选项卡的标签和图标颜色。
      inactiveTintColor: '#a3a6a4', //"非活动" 选项卡的标签和图标颜色。
      showLabel: true,
      lazy: true,
      backBehavior: true, // 按返回键是否跳转到第一个tab页面
      showIcon: true,
      labelStyle: {
        fontSize: 10,
      }
    }
  })

const AppNavigator = createStackNavigator(
  {
    // 登录
    Login: { screen: Login },
    // NoData: { screen: NoData },

    TabNavigator: { screen: TabNavigator }
  }, {
    initialRouteName: 'Login',
    headerMode: 'none',
  });

export default AppNavigator