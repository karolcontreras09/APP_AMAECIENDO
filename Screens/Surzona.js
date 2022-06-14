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

export default function Surzona() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.Imagefondo}
      source={require("../assets/imagen/fondo.png")}
    > 
    <Encabezado titulo="ESTANCOS DEL SUR"/>
    
      <View style={styles.parent}> 
    
      <TouchableOpacity style={styles.boton_norte}>
        <Image
          style={styles.mapasur}
          source={require("../assets/imagen/mapasur.jpeg")}
        ></Image>
         </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("surone")}>
          <Image
            style={styles.logo01}
            source={require("../assets/imagen/1.png")}
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
    width: '50%',
    height: '50%'
  },  
  mapasur: {
    width: 380,
    height: 630,
    alignSelf: "center",
    marginLeft: '100%',
  },
  tittle: { 
    marginTop: "7%",
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: 'bold', 
    margin: 12,
  },
  logo01: {
    width: '10%',
    height: '32%',
    alignSelf: "center",
    marginTop: "0%",
  },
});
