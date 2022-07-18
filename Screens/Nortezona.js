import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Encabezado from "../Components/Encabezado";
import MapView, { Marker } from "react-native-maps";

export default function Nortezona() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.Imagefondo}
      source={require("../assets/imagen/fondo.png")}
    >
      <Encabezado titulo="ESTANCOS DEL NORTE" />
      <MapView
        style={styles.map}
      >
        <Marker
          coordinate={{ latitude: 2.948526815506605, longitude: -75.2975463861876 }}
          title="Prueba"
          image={require("../assets/imagen/foto.png")}
        />
      </MapView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Imagefondo: {
    resizeMode: "contain",
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
