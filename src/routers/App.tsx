/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { ReduxStore, persistor } from '../reduxState/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import RootScreen from './RootScreen'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PermissionsAndroid,
  Platform
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const PERMISSIONS = [
  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  PermissionsAndroid.PERMISSIONS.CAMERA,
];

const App = () => {


  const [permissionsGranted, setPermissionsGranted] = React.useState(false);

  React.useEffect(() => {
    // 权限检查
    function checkPermissions() {
      if (Platform.OS === 'android') {
        PermissionsAndroid.requestMultiple(PERMISSIONS).then(results => {
          const allPermissionsGranted = Object.values(results).every(
            result => result === 'granted',
          );
          if (allPermissionsGranted) {
            setPermissionsGranted(true);
          } else {
            checkPermissions();
          }
        });
      } else {
        setPermissionsGranted(true);
      }
    }
    
    checkPermissions();
  }, []);

  if (permissionsGranted) {
    return null;
  }


  return (
    <>
      <Provider store={ReduxStore}>
        <StatusBar barStyle="dark-content" />
        <PersistGate loading={null} persistor={ persistor }>
           <RootScreen />
        </PersistGate>
         
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
