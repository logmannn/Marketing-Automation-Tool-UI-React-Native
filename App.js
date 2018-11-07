import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View style={{paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight}}>
          <View style={styles.header}>
            <Text style={styles.headerText}>OpenEmail</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: '#FFF',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
