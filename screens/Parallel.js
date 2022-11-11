import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Parallel = (props) => {
  const springVal = useRef(new Animated.Value(0.4)).current;
  const animVal = useRef(new Animated.Value(0)).current;

  const moving = animVal.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -100, 0],
  });

  const animate = () => {
    Animated.parallel([
      Animated.spring(springVal, {
        toValue: 1,
        friction: 1,
        useNativeDriver: true,
      }),
      Animated.spring(animVal, {
        toValue: 1,
        duration: 2000,
        friction: 1,
        tension: -10,
        useNativeDriver: true,
      }),
    ]).start(() => {
      springVal.setValue(0.3);
      animVal.setValue(0);
    });
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ width: 180, height: 150, transform: [{ scale: springVal }] }}
        source={require("../assets/favicon.png")}
      />
      <Animated.View style={{ translateX: moving }}>
        <Text style={{ color: "blue", fontSize: 20 }}>
          Welcome to Faculty of IT!
        </Text>
      </Animated.View>
      <Button title="Run Parallel" onPress={animate} />
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

export default Parallel;
