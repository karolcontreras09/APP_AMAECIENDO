import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Recuperarcontra() {
  return (
    <ImageBackground
      style={styles.ImageBackground}
      source={require("../assets/imagen/login.png")}
    >
      <View style={styles.view}>
        <TextInput
          placeholder="Ingresa el codigo"
          secureTextEntry
          style={styles.textInputone}
        />
        <TextInput
          placeholder="🔒 Crear contraseña"
          secureTextEntry
          style={styles.textInputone}
        />
        <TextInput
          placeholder="🔒 Confirmar contraseña"
          secureTextEntry
          style={styles.textInputone}
        />
        <TouchableOpacity
          //onPress={() => navigation.navigate("")}
          style={{
            backgroundColor: "orange",
            padding: 10,
            marginTop: "10%",
            width: "36%",
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
            GUARDAR
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
    marginTop: "60%",
  },
  textInputone: {
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    width: "90%",
    height: 50,
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "50%",
    borderColor: 30,
    backgroundColor: "transparent",
  },
});
