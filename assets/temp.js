import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import Draggable from 'react-native-draggable';

export default class App extends React.Component {
  render() {

    return (
        <View style={{paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight}}>
          <View style={styles.header}>
            <Text style={styles.headerText}>OpenEmail</Text>
          </View>
          <ScrollView style={{width: 1000}} horizontal={true}>
            <Text style={styles.otherText}>OpenEmail</Text>
            <Draggable reverse={false} renderColor='blue' renderShape='square' offsetX={0} offsetY={0} x={50} y={50} renderText='B'/>
            <Draggable reverse={false} renderColor='blue' renderShape='square' offsetX={0} offsetY={0} renderText='B'/>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  otherText: {
    width: 1000,
    height: 1000,
    backgroundColor: 'green'
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
});
