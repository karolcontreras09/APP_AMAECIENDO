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

export default function Nortezona() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.Imagefondo}
      source={require("../assets/imagen/fondo.png")}
    >
      <Encabezado titulo="ESTANCOS DEL NORTE"/>
      
      <View style={styles.parent}>

      <TouchableOpacity style={styles.boton_norte}>
        <Image
          style={styles.mapanorte}
          source={require("../assets/imagen/mapanorte.jpeg")}
        ></Image>
         </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("norteone")}>
          <Image
            style={styles.logo03}
            source={require("../assets/imagen/3.png")}
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
  mapanorte: {
    width: 380,
    height: 630,
    alignSelf: "center",
    marginLeft: '100%',
    
  },
  tittle: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: "7%"
  },
  logo03: {
    width: '10%',
    height: '32%',
    alignSelf: "center",
    marginTop: "0%",
  },

});
