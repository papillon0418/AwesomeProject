import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function fixfix() {
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
          />
        </View>

        <View style={styles.group_input}>
          <Text style={styles.text_headerlabel}>คำอธิบายปัญหา *</Text>
          <TextInput
            multiline
            numberOfLines={2}
            style={styles.text_input}
            placeholder="placeholder"
          />
        </View>

        <View style={styles.group_input}>
          <Text style={styles.text_headerlabel}>ช่องทางการติดต่อ *</Text>
          <TextInput
            multiline
            numberOfLines={2}
            style={styles.text_input}
            placeholder="placeholder"
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
