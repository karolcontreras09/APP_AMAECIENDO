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
    
      <View style={styles.boton_norte}>
        <Image
          style={styles.mapasur}
          source={require("../assets/imagen/mapasur.jpeg")}
        ></Image>
         </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("norteone")}>
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
    width: null,
    height: null,
    resizeMode: 'contain',
    flex: 1
  },
  boton_norte: {
    width: 180,
    height: '60%'
  },  
  mapasur: {
    width: 335,
    height: 570,
    marginRight: 10,
    marginLeft: 20,
  },
  tittle: { 
    margin: 15,
     fontSize: 20,
     marginTop: "7%",
    textAlign: "center",
    color: "white",
    fontWeight: 'bold',
  },
  logo01: {
    width: '10%',
    height: '32%',
    alignSelf: "center",
    //marginTop: "0%",
  },
});
