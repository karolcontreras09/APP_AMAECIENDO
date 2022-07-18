import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Encabezado from "../Components/Encabezado";
import env from "../env.json";

const DATA = [
  {
    id: 1,
    image: require("../assets/imagen/ESTANCOELCAMINO.png"),
  },
];

const { Height } = Dimensions.get("window");

export default function Norteone() {
  const [estancos, setEstancos] = useState({});

  const obtenerEstanco = async () => {
    try {
      const res = await axios.get(`${env.host}/estanco/5`);
      setEstancos(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const renderItem = ({ item }) => <Item image={item.image} />;

  const Item = ({ image }) => (
    <View style={styles.item}>
      <Image source={{ uri: estancos.imagen_estanco }} style={styles.image} />
    </View>
  );

  useEffect(() => {
    obtenerEstanco();
  }, []);

  return (
    <ImageBackground
      style={styles.Imagefondo}
      source={require("../assets/imagen/fondo.png")}
      resizeMode="repeat"
    >
      <Text style={styles.title}> {JSON.stringify(estancos.data)} </Text>
      <Encabezado titulo={estancos.nombre_estanco} firstIcon="menu" />

      <SafeAreaView style={styles.Container}>
        <ScrollView style={styles.scrollView}>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
          <View
            style={styles.card}
            cardElevation={4}
            maxCardElevation={4}
            radius={10}
            backgroundColor={"white"}
          >
            <View style={styles.text}>
              <View style={styles.View}>
                <Image
                  style={styles.imagen}
                  source={{ uri: estancos.logo_estanco }}
                ></Image>
                <Text style={styles.title}>
                 {estancos.nombre_estanco}{" "}
                </Text>
              </View>

              <Text style={styles.negrita}>
                {"\n"}
                {`${estancos.descripcion}
                  \n TELEFONO: ${estancos.telefono_estanco} 
                  \n ESTANCO Y CLUB NOCTURNO
                  \n HORARIO: ${estancos.horario_estanco}
                  \n HORA: ${estancos.hora_estanco}
                  \n DIRECCIÓN: ${estancos.direccion_estanco}
                  \n BARRIO: ${estancos.barrio}
                `}
              </Text>
            </View>
            <TouchableOpacity
              //onPress={() => navigation.navigate("")}
              style={{
                backgroundColor: "orange",
                padding: 10,
                width: "40%",
                borderRadius: 8,
                marginRight: 8,
                marginLeft: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                COMO LLEGAR
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Imagefondo: {
    width: null,
    height: null,
    resizeMode: "contain",
    flex: 1,
  },

  title: {
    fontSize: 22,
    margin: 125,
    fontWeight: "bold",
    position: "absolute",
    textAlign: "center",
  },
  tittles: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  negrita: {
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 5,
  },
  item: {
    marginVertical: 2,
    overflow: "hidden",
    width: "95%",
  },
  image: {
    marginLeft: 18,
    height: 190,
    width: "100%",
  },
  imagen: {
    height: 70,
    width: 70,
    resizeMode: "stretch",
    marginLeft: 5,
  },
  container: {
    flex: 1,
    width: "100%",
  },
  Container: {
    flex: 1,
  },
  card: {
    height: 450,
    width: "90%",
    marginTop: 20,
    marginLeft: 18,
    marginBottom: 20,
  },
  text: {
    padding: 10,
  },
  View: {
    marginTop: 3,
    marginBottom: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  view: {
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "8%",
  },
});
