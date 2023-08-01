import React, { Component, componentDidMount } from "react";
import { View, StyleSheet, Animated, TouchableWithoutFeedback, Image, Text } from "react-native";

// create a component
export default class Loader extends Component {
  constructor() {
    super();
    this.state = {
      animValue: new Animated.Value(40)
    };
  }
   componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animValue, {
          toValue: 40,
          duration: 700,
          useNativeDriver: false
        }),
        Animated.timing(this.state.animValue, {
          toValue: 41,
          duration: 700,
          useNativeDriver: false
        }),
      ])
    ).start();
  }

  renderRectangle = () => {
    let rotateAnimation = this.state.animValue.interpolate({
        inputRange: [40, 41],
        outputRange: ['0deg', '360deg']
    });

    const customStyle = {
      height: this.state.animValue,
      transform:[{rotate:rotateAnimation}]
    };

    return (
      <Animated.View style={[styles.rectangle, customStyle]}>
      <Image  source={{uri : "https://app.carrefourdemanutention.com/public/iFELEM_icon.png"}}  style={{width: "100%", height: "100%"}} />
        <TouchableWithoutFeedback>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderRectangle()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  rectangle: {
    width: 40
  }
});

