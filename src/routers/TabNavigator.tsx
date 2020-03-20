import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const { Navigator, Screen } = createBottomTabNavigator()


// createBottomTabNavigator会创建底部导航栏，同样的Navigator来规定导航的样式  Screen来设置路由规则，也就是底部的tab 按钮
import HomeScreen from '../screens/homeScreen/HomeScreen'
import MapScreen from '../screens/mapScreen/MapScreen'
import DiscoverScreen from '../screens/DiscoverScreen/DiscoverScreen'
import ProfileScreen from '../screens/ProfileScreen'

function TabNavigator() {

  const opt = ({ route }) => ({
    tabBarIcon: ({color, size}) => {
      const routeName = route.name;
      let iconName = '';
      if(routeName === 'HomeScreen') {
        iconName = 'home';
      } else if (routeName === 'MapScreen') {
        iconName = 'map-marker';
      } else if (routeName === 'ProfileScreen') {
        iconName = 'user';
      } else if (routeName === 'DiscoverScreen') {
        iconName = 'compass';
      }

      return <Icon name={iconName} size={size} color={color!} />;
    }
  
  });

  return (
    <Navigator
      screenOptions={ opt }
    >

      <Screen name="HomeScreen" component={ HomeScreen } options= {{tabBarLabel: '首页'}} />
      <Screen name="MapScreen" component={ MapScreen } options= {{tabBarLabel: '附近'}} />

      <Screen name="DiscoverScreen" component={DiscoverScreen}  options={{ tabBarLabel: '发现' }} />
      <Screen name="ProfileScreen" component={ProfileScreen} options={{ tabBarLabel: '我的' }} />
    </Navigator>
  )
}

export default TabNavigator