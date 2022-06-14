import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Encabezado from "../Components/Encabezado";

export default function Estezona() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.Imagefondo}
      source={require("../assets/imagen/fondo.png")}
    >
      <View style={styles.parent}>
    
      <Encabezado titulo="ESTANCOS DEL ESTE" />

      <TouchableOpacity style={styles.boton_norte}>
        <Image
          style={styles.mapaeste}
          source={require("../assets/imagen/mapaeste.jpeg")}
        ></Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("esteone")}>
        <Image
          style={styles.logo02}
          source={require("../assets/imagen/2.png")}
        ></Image>
      </TouchableOpacity>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Imagefondo: {
    width: 413,
    height: 735,
  },
  mapaeste: {
    width: 380,
    height: 630,
    alignSelf: "center",
    marginLeft: "100%",
  },
  tittle: {
    marginTop: "7%",
    textAlign: "center",
    color: "white",
    fontSize: 20,
    margin: 15,
    fontWeight: "bold",
  },
  boton_norte: {
    width: "50%",
    height: "50%",
  },

  logo02: {
    width: "12%",
    height: "32%",
    alignSelf: "center",
  },
});
