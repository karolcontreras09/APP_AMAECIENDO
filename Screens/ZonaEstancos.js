import React, { useEffect, useState } from "react";
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
  const [estancos, setEstancos]= useState([]);

  const consulta = async () => {
    try {
      const res = await axios.get(`${env.host}/zona/estancos/${id_zona}`);
      setEstancos (res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      await consulta();
    })()
  }, []);

  return (
    <ImageBackground
      style={styles.Imagefondo}
      source={require("../assets/imagen/fondo.png")}
    >
      <Encabezado titulo="ESTANCOS DEL NORTE" />
      <MapView
        region={{latitude: 2.936511, longitude: -75.266694,  latitudeDelta: 0.01, longitudeDelta: 0.01}}
        style={styles.map}
      >
        {estancos.length >0 && estancos.map(el=> (
          <Marker  
          coordinate={{ latitude: el.latitud, longitude: el.longitud }}
          title= {el.nombre_estanco}
          image={require("../assets/imagen/001.png")} onPress={() => navigation.navigate("norteone", {id:el.id_estanco})}
        />
        ))}
        {/*<Marker  
          coordinate={{ latitude: 2.936511, longitude: -75.266694 }}
          title="Estanco Crobar"
          image={require("../assets/imagen/001.png")} onPress={() => navigation.navigate("norteone", {id:1})}
        />
        <Marker
          coordinate={{ latitude: 2.939693, longitude: -75.267940}}
          title="Estanco Opium"
          image={require("../assets/imagen/002.png")} onPress={() => navigation.navigate("norteone", {id:2})}
        />
           <Marker
          coordinate={{ latitude: 2.921005, longitude: -75.271423}}
          title="Estanco El Camino"
          image={require("../assets/imagen/003.png")} onPress={() => navigation.navigate("norteone", {id:3})}
        />
               <Marker
          coordinate={{ latitude: 2.945345, longitude: -75.299927}}
          title="Estanco Lola Perez"
          image={require("../assets/imagen/004.png")} onPress={() => navigation.navigate("norteone", {id:6})}
  />*/}
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
    height: "85%",
    width: "90%",
    marginLeft: 18,
    marginBottom: 20,
     //Dimensions.get('window').width,
     //Dimensions.get('window').height
  }
});
