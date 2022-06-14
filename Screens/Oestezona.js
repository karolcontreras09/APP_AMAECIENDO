import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import Encabezado from "../Components/Encabezado";

export default function Oestezona() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.Imagefondo}
      source={require("../assets/imagen/fondo.png")}
    >
      <View style={styles.parent}>

        <Encabezado titulo="ESTANCOS DEL OESTE" />

        <TouchableOpacity style={styles.boton_norte}>
          <Image
            style={styles.mapasur}
            source={require("../assets/imagen/mapaoeste.jpeg")}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("oesteone")}>
          <Image
            style={styles.logo01}
            source={require("../assets/imagen/4.png")}
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
  boton_norte: {
    width: "50%",
    height: "50%",
  },
  mapasur: {
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
  logo01: {
    width: "12%",
    height: "32%",
    alignSelf: "center",
  },
});
