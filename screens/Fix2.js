import React, {useState} from 'react'
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Button
} from "react-native";
import * as ImagePicker from 'expo-image-picker';


// import firebase from './FirebaseDB'
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import {firebase} from './FirebaseDB';


export default function FixForm() {
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [urlImage, setUrlImage] = useState("");
  //Connect FireBase
  const dbRef = firebase.firestore().collection('Fix_list');
  
  //Upload Image
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing:false,
      
      quality:1,
    });
    
    const source = {uri: result.uri};
    console.log(source);
    setImage(source);
  };

  const uploadImage = async () =>{
    setUploading(true);
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);
    var ref = firebase.storage().ref().child(filename).put(blob);
    let getImageURL;
    try{
      await ref;
    }catch(e){
      console.log(e);
    }
    try{
      getImageURL = await firebase.storage().ref().child(filename).getDownloadURL();
      setUrlImage(getImageURL);
    }catch(e){
      console.log(e);
    }
    console.log(filename);
    console.log(getImageURL);

    setUrlImage("url image : = " + getImageURL.toString);
    console.log(urlImage);


    setUploading(false);
    setImage(null);
    
  };
    
//   const dbRef = firebase.getFirestore.collection('Fix_list');

  const summitForm = async () =>{
    await uploadImage();
    console.log(place, description, phone);
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    dbRef.add({
        place: place,
        description: description,
        phone: phone,
        time: timestamp,
        status: 'Request',
        url: urlImage

    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headbar}>
          <Image
            style={{
              height: 50,
              width: 50,
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
          <TouchableOpacity style={{width: "90%", backgroundColor:"#D9D9D9", borderRadius: 10, marginLeft: "5%", height: "auto", justifyContent:"center", alignItems:"center"}} onPress={pickImage}>
            {image == null ? <Text style={{fontSize: 24, fontWeight: "300", margin: 30}}> Upload Here</Text> : null}
            {image && <Image source={{uri: image.uri}} style={{width: 300, height: 300, marginBottom: 20, borderRadius: 10, marginTop: 20}} />}
          </TouchableOpacity>
          
          {/* <Button title='Test Upload' onPress={uploadImage}/> */}
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
          <Text style={{ fontSize: 26, fontWeight: "650" }}>Cancel</Text>
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
          <Text style={{ fontSize: 26, fontWeight: "650" }}>Save</Text>
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
    height: 75,
    flexDirection: "row",
    alignItems: "center",
  },
  headtext: {
    fontSize: 24,
    fontWeight: "bold",
  },
  group_input: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    flexDirection: "column",
    marginTop: "2%",
  },
  text_headerlabel: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: "5%",
    marginBottom: "2%",
  },
  text_input: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    width: "90%",
    height: 69,
    fontSize: 20,
    marginLeft: "5%",
    padding: 10,
  },
  container_summit: {
    width: "100%",
    height: 65,
    flexDirection: "row",
  },
});
