import React, {useState} from 'react'
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import {collection,doc, addDoc, Timestamp, setDoc} from "firebase/firestore";
// import { db } from './FirebaseDB';
// import firebase from './FirebaseDB'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import {firebase} from './FirebaseDB';


export default function FixForm2() {
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const dbRef = firebase.firestore().collection('Fix_list');
  const [status, setStatus] = useState("Request");

  // const dbRef = firebase.getFirestore.collection('Fix_list');

  const summitForm = () =>{
    // const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const timestamp = firebase.firestore.Timestamp.fromDate(new Date());
    const t = timestamp.toDate().toDateString();

    dbRef.add({
      place: place,
      description: description,
      phone: phone,
      // time: timestamp,
      status: status,
      time:t,
      
    })
    console.log(place, description, phone, t);
    
    // dbRef.add({
    //     place: place,
    //     description: description,
    //     phone: phone,
    //     time: timestamp,
    //     status: status,
    // }).catch((err) => {
    //   console.log(err);
    // })
    
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headbar}>
          <Image
            style={{
              height: "50px",
              width: "50px",
              marginLeft: "5%",
              marginRight: "3%",
            }}
            source={require("../assets/image 6.png")}
          />
          <Text style={styles.headtext}>Fix Form</Text>
        </View>

        <View style={styles.group_input}>
          <Text style={styles.text_headerlabel}>สถานที่ *</Text>
          <TextInput
            multiline
            numberOfLines={2}
            style={styles.text_input}
            placeholder="placeholder"
            defaultValue={place}
            onChangeText={(newPlace) => {setPlace(newPlace)}}
          />
        </View>

        <View style={styles.group_input}>
          <Text style={styles.text_headerlabel}>คำอธิบายปัญหา *</Text>
          <TextInput
            multiline
            numberOfLines={2}
            style={styles.text_input}
            placeholder="placeholder"
            defaultValue={description}
            onChangeText={(newDescription) => {setDescription(newDescription)}}
          />
        </View>

        <View style={styles.group_input}>
          <Text style={styles.text_headerlabel}>ช่องทางการติดต่อ *</Text>
          <TextInput
            multiline
            numberOfLines={2}
            style={styles.text_input}
            placeholder="placeholder"
            defaultValue={phone}
            onChangeText={(newPhone) => {setPhone(newPhone)}}
          />
        </View>

        <View style={styles.group_input}>
          <Text style={styles.text_headerlabel}>รูปภาพ *</Text>
          <TextInput
            multiline
            numberOfLines={2}
            style={styles.text_input}
            placeholder="placeholder"
          />
        </View>
      </View>

      <View style={styles.container_summit}>
        <TouchableOpacity
          style={{
            width: "50%",
            height: "100%",
            backgroundColor: "#8EE2FD33",
            justifyContent: "center",
            alignItems: "center",
            opacity: "80%",
          }}
          // onPress={navigation.navigate("Home")}
        //   onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ fontSize: "26px", fontWeight: "650" }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "50%",
            height: "100%",
            backgroundColor: "#A9FAAC",
            justifyContent: "center",
            alignItems: "center",
            opacity: "80%",
          }}
          onPress={summitForm}
        >
          <Text style={{ fontSize: "26px", fontWeight: "650" }}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
  },
  headbar: {
    backgroundColor: "#8EE2FD",
    width: "100%",
    height: "75px",
    flexDirection: "row",
    alignItems: "center",
  },
  headtext: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  group_input: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    flexDirection: "column",
    marginTop: "2%",
  },
  text_headerlabel: {
    fontSize: "20px",
    fontWeight: "500",
    marginLeft: "5%",
    marginBottom: "2%",
  },
  text_input: {
    backgroundColor: "#D9D9D9",
    borderRadius: "10px",
    width: "90%",
    height: "69px",
    fontSize: "20px",
    marginLeft: "5%",
    padding: "10px",
  },
  container_summit: {
    width: "100%",
    height: "65px",
    flexDirection: "row",
  },
});
