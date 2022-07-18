import React, { useEffect } from "react";
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
import axios from 'axios';
import env from '../env.json';
import { useNavigation } from "@react-navigation/native";

export default function ZonaEstancos({ route }) {
  const navigation = useNavigation();
  
  const { id_zona} = route.params;
 


  const consulta = async () => {
    try {
      console.log(id_zona);
      const res = await axios.get(`${env.host}/zona/estancos/${id_zona}`);
      console.log(res.data);
    } catch (e) {
      console.log(es);
    }
  };

  useEffect(() => {
    (async () => {
      await consulta();
    })()
  });

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
          image={require("../assets/imagen/4.png")} onPress={() => navigation.navigate("norteone")}
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
