import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStackNavigator from './MainStackNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { navigationRef } from '../utils/navigationService'

import { useSelector } from 'react-redux'
import { selectToken } from '../reduxState/selectors'

// 创建一个路由栈
// NavigationContainer是所有路由的荣最外层容器 路由规则（栈导航 tab导航都得写在这里面 )


// useSelector, useDispatch 是react-redux的两个hooks
// const counter = useSelector(state => state.counter)
function RootScreen() {
  const token = useSelector(selectToken)
  return (
    <NavigationContainer ref={navigationRef}>
      {
        token ?
        ( <MainStackNavigator /> )
        :  ( <AuthStackNavigator /> )

      }
    </NavigationContainer>
  )
}



export default RootScreen


// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator()
// 使用底部导航
// function RootScreen(){
//   return (
//     <>
//       <MainStackNavigator />
//     </>
//   )
// }

// // 使用栈导航
// function RootScreen(){
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }