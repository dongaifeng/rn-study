import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Text, View } from 'react-native';
import TabNavigator from './TabNavigator'

import FeedListScreen from '../screens/FeedListScreen/FeedListScreen'
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

// 主导航是一个栈导航 用createStackNavigator创建一个栈导航：Navigator是一个第二层容器可以看做是规定那种类型的导航 Screen相当于对应的组件
// 主导航的第一屏 是TabNavigator 这是个bottomTab导航
const { Navigator, Screen } = createStackNavigator();

function MainStackNavigator () {
  return (
      <Navigator
      >
        <Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />


      <Screen
        name='FeedListScreen'
        component={ FeedListScreen }
        options={{
          title: '我的动态'
        }}
      />

        <Screen 
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        <Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{
            title: '我的鉴定',
          }}
        />
      </Navigator>
  );
}

export default MainStackNavigator