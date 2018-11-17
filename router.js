import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, createMaterialBottomTabNavigator } from 'react-navigation';

import { Login, Home, Chat, Content, About, WebScene, Drawer } from './src/page/index';
//全局颜色
import color from './src/base/color'
//下方图标
import AddressBooks2 from './src/static/svg/AddressBooks2';
import IdentityCheck from './src/static/svg/IdentityCheck';
import Bms from './src/static/svg/Bms';
import Editor from './src/static/svg/Editor';

const TabNavigator = createBottomTabNavigator(
  {
    'Home': {
      screen: Home,
      navigationOptions: {
        tabBarLabel: '首页',
        title: '12'
      }
    },
    'Chat': {
      screen: Chat,
      navigationOptions: {
        tabBarLabel: '聊天'
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
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const iconStyle = {
          width: 32,
          height: 32,
          fill: tintColor
        }
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = <IdentityCheck {...iconStyle} />
            break;
          case 'Chat':
            iconName = <Editor {...iconStyle} />
            break;
          case 'Content':
            iconName = <AddressBooks2 {...iconStyle} />
            break;
          case 'About':
            iconName = <Bms {...iconStyle} />
            break;
        }
        return iconName
      },
    }),

    tabBarOptions: {
      activeTintColor: color.active, // 活动选项卡的标签和图标颜色。
      inactiveTintColor: color.gray, //"非活动" 选项卡的标签和图标颜色。
      showLabel: true,
      lazy: true,
      backBehavior: true, // 按返回键是否跳转到第一个tab页面
      showIcon: true,
      labelStyle: {
        fontSize: 10,
      }
    }
  }
)

const AppNavigator = createStackNavigator(
  {
    // 首页
    // Login: { screen: Login },
    // NoData: { screen: NoData },
    TabNavigator: TabNavigator,
    WebScene: WebScene,
    Drawer: Drawer
  }, {
    navigationOptions: ({ navigation }) => {
      let routeName;
      const states = navigation.state
      if (states.routes) {
        let { index, routes } = states
        routeName = routes[index].routeName;
      }
      let iconName = null;
      switch (routeName) {
        case 'Home':
          iconName = "首页"
          break;
        case 'Chat':
          iconName = '聊天'
          break;
        case 'Content':
          iconName = "内容"
          break;
        case 'About':
          iconName = "关于"
          break;
      }

      return ({
        headerTitle: iconName,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        lazy: false
      })
    }
  }
);

export default AppNavigator

