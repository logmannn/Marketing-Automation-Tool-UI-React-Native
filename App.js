import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  Alert
} from "react-native";
import Draggable from "react-native-draggable";
import PinchZoomView from "react-native-pinch-zoom-view";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zoom: true };
  }

  render() {
    const { zoom } = this.state;
    return (
      <>
        <PinchZoomView scalable={zoom}>
          <View style={styles.box}>
            <Draggable
              reverse={false}
              renderColor="red"
              renderShape="square"
              offsetX={0}
              x={0}
              offsetY={0}
              y={0}
              renderText="B"
              pressInDrag={() => {
                this.setState({ zoom: false });
              }}
              pressDragRelease={() => {
                this.setState({ zoom: true });
              }}
            />

            <Draggable
              reverse={false}
              renderColor="red"
              renderShape="square"
              offsetX={0}
              x={100}
              offsetY={0}
              y={100}
              renderText="B"
              renderText="B"
              pressInDrag={() => {
                this.setState({ zoom: false });
              }}
              pressDragRelease={() => {
                this.setState({ zoom: true });
              }}
            />
          </View>
        </PinchZoomView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  scroller: {
    // width: 5000,
    flexDirection: "column"
  },
  box: {
    width: 10000,
    height: 10000,
    borderWidth: 3,
    borderColor: "#d6d7da"
  }
});
