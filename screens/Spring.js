import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Spring = (props) => {
  const springVal = useRef(new Animated.Value(0.3)).current;

  const animate = () => {
    Animated.spring(springVal, {
      toValue: 1,
      friction: 1,
      tension: 10,
      useNativeDriver: true,
    }).start(() => {
      springVal.setValue(0.3);
    });
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ width: 180, height: 150, transform: [{ scale: springVal }] }}
        source={require("../assets/favicon.png")}
      />
      <Button title="Spring" onPress={animate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BAD1C2",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default Spring;
