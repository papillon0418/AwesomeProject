import React from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  Easing,
  Image,
} from "react-native";
const Stat = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSec}>
        <Image
          style={{ width: 50, height: 50, marginLeft: "5%" }}
          source={require("../assets/image-20.png")}
        />
        <Text style={{ fontSize: 26, fontWeight: "bold", marginLeft: "3%" }}>
          Stat
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F6F2EC",
  },
  topSec: {
    width: "100%",
    height: 75,
    backgroundColor: "#8EE2FD",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Stat;
