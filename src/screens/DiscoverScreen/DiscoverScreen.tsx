import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

interface Props {}
function DiscoverScreen({  }: Props) {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>DiscoverScreen!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  // listRow: {
  //   overflow: 'hidden',
  //   margin: 15,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
  // avatar: {
  //   width: 48,
  //   height: 48,
  //   borderRadius: 24,
  //   marginRight: 10,
  //   resizeMode: 'cover',
  // },
  // order: {},
  // username: {},
});
export default DiscoverScreen;
