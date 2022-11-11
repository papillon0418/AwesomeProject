import React, { useRef, useState } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  Easing,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  Image,
} from "react-native";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "./FirebaseDB";
const History = (props) => {

    const q = query(collection(db, "Fix_list"), where("status", "==", "Request"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const Fixlist = [];
      querySnapshot.forEach((doc) => {
          Fixlist.push(doc.data().description);
          });
          console.log("Current Fixlist in CA: ", Fixlist.join(", "));
    });
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image
          style={{ width: 50, height: 50, marginLeft: "5%" }}
          source={require("../assets/image 18.png")}
        />
        <Text style={{ fontSize: 26, fontWeight: "bold", marginLeft: "3%" }}>
          My History
        </Text>
      </View>
      <ScrollView>
        <View>
          
          <Text
            style={{
              color: "#FF922E",
              fontSize: 18,
              marginBottom: "1%",
              marginLeft: "2%",
            }}
          >
            {Fixlist.description}
          </Text>
          <View
            style={{
              borderBottomColor: "grey",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginBottom: "2%",
            }}
          />
          <View style={styles.detail}>
            <Image
              style={{ width: 87, height: 87, marginLeft: "3%" }}
              source={require("../assets/cat.jpg")}
            />
            <View style={styles.inner_detail}>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>
                เงี๊ยวๆๆๆๆ
              </Text>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>M23</Text>
            </View>
            <Text style={{ fontWeight: "500", fontSize: 12 }}>10/10/2022</Text>
          </View>
          <View style={styles.detail}>
            <Image
              style={{ width: 87, height: 87, marginLeft: "3%" }}
              source={require("../assets/cat.jpg")}
            />
            <View style={styles.inner_detail}>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>
                เงี๊ยวๆๆๆๆ
              </Text>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>M23</Text>
            </View>
            <Text style={{ fontWeight: "500", fontSize: 12 }}>10/10/2022</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: "#1C5F9D",
              fontSize: 18,
              marginBottom: "1%",
              marginLeft: "2%",
            }}
          >
            Pending (1)
          </Text>
          <View
            style={{
              borderBottomColor: "grey",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginBottom: "2%",
            }}
          />
          <View style={styles.detail}>
            <Image
              style={{ width: 87, height: 87, marginLeft: "3%" }}
              source={require("../assets/cat.jpg")}
            />
            <View style={styles.inner_detail}>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>
                เงี๊ยวๆๆๆๆ
              </Text>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>M23</Text>
            </View>
            <Text style={{ fontWeight: "500", fontSize: 12 }}>10/10/2022</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: "#18B23A",
              fontSize: 18,
              marginBottom: "1%",
              marginLeft: "2%",
            }}
          >
            Success (1)
          </Text>
          <View
            style={{
              borderBottomColor: "grey",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginBottom: "2%",
            }}
          />
          <View style={styles.detail}>
            <Image
              style={{ width: 87, height: 87, marginLeft: "3%" }}
              source={require("../assets/cat.jpg")}
            />
            <View style={styles.inner_detail}>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>
                เงี๊ยวๆๆๆๆ
              </Text>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>M23</Text>
            </View>
            <Text style={{ fontWeight: "500", fontSize: 12 }}>10/10/2022</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: "red",
              fontSize: 18,
              marginBottom: "1%",
              marginLeft: "2%",
            }}
          >
            Reject (1)
          </Text>
          <View
            style={{
              borderBottomColor: "grey",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginBottom: "2%",
            }}
          />
          <View style={styles.detail}>
            <Image
              style={{ width: 87, height: 87, marginLeft: "3%" }}
              source={require("../assets/cat.jpg")}
            />
            <View style={styles.inner_detail}>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>
                เงี๊ยวๆๆๆๆ
              </Text>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>M23</Text>
            </View>
            <Text style={{ fontWeight: "500", fontSize: 12 }}>10/10/2022</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F2EC",
    height: "100%",
    width: "100%",
    //   alignItems: "center",
    //   justifyContent: "space-around",
  },
  nav: {
    // flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 75,
    backgroundColor: "#8EE2FD",
    alignItems: "center",
    // flexWrap: "nowrap"
  },
  request_head: {
    width: 98,
    height: 22,
    left: 22,
    top: 82,

    // color: "#FF922E",
  },
  detail: {
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "2%",
    height: 110,
    // border: "1px solid rgba(0, 0, 0, 0.1)",
    // border: "1px solid rgba(0, 0, 0, 0.2)",
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 2,
  },
  inner_detail: {
    // flexDirection: "column"
    justifyContent: "space-around",
  },
});

export default History;
