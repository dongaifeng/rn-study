import React from 'react';
import { connect } from 'react-redux';

import {SafeAreaView, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import actions from '../../reduxState/actions';
import { useDispatch } from 'react-redux';
import { navigate } from '../../utils/navigationService'

import FeedListScreen from '../FeedListScreen/FeedListScreen'

function HomeScreen(props: any) {
  const dispatch = useDispatch();
  const { navigation } = props

  function pass(){
    navigation.navigate('FeedListScreen')
  }


  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>动态</Text>
          <TouchableOpacity 
            style={styles.postButton}
            onPress={() => navigate('FeedListScreen')}
            >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <FeedListScreen />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    borderWidth: 1,
    borderColor: 'red'
  },
  header: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red'

  },
  headerTitle:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  postButton: {
    padding: 10,
    position: 'absolute',
    right: '6%',
  },
  buttonText:{
    fontSize: 26,
    color: '#333'
  }
})

const mapStateToProps = (state: any) => {
  return {
    user: state.dataState.user
  }
}


// const mapDispatchToProps = {
//   change: actions.change,
//   setName: actions.setName
// }

const mapDispatchToProps = (dispatch) => ({
  change: () => dispatch(actions.change()),
  setName: (name: any) => dispatch(actions.setName(name))
})


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen) 