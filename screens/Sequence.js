import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Sequence = (props) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const spinAnim = useRef(new Animated.Value(0)).current;

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animate = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(spinAnim, {
        toValue: 0,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => {
      fadeAnim.setValue(1);
      spinAnim.setValue(0);
    });
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{
          width: 180,
          height: 150,
          opacity: fadeAnim,
          transform: [{ rotate: spin }],
        }}
        source={require("../assets/favicon.png")}
      />
      <Button title="Run Sequence" onPress={animate} />
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

export default Sequence;
