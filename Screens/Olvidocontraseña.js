import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Olvidocontraseña() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.ImageBackground}
      source={require("../assets/imagen/login.png")}
    >
      <View style={styles.view}>
        <TextInput placeholder="👤 Usuario" style={styles.textInput} />

        <TouchableOpacity
          onPress={() => navigation.navigate("recuperar")}
          style={{
            backgroundColor: "orange",
            padding: 10,
            marginTop: "10%",
            width: "50%",
            alignSelf: "center",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "white",
            }}
          >
            {" "}
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  ImageBackground: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  view: {
    marginTop: "5%",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    width: "90%",
    height: 50,
    marginTop: "80%",
    marginLeft: "5%",
    marginRight: "50%",
    borderColor: 30,
    backgroundColor: "transparent",
  },
});
