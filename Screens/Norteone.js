import React from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  //StatusBar,
  FlatList,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Encabezado from "../Components/Encabezado";

const DATA = [
  {
    id: 1,
    image: require("../assets/imagen/ESTANCOELCAMINO.png"),
  },
];

const Item = ({ image }) => (
  <View style={styles.item}>
    <Image source={image} style={styles.image} />
  </View>
);

export default function Norteone() {
  const renderItem = ({ item }) => <Item image={item.image} />;

  return (
    <ImageBackground
      style={styles.Imagefondo}
      source={require("../assets/imagen/fondo.png")}
    >
      <Encabezado titulo="ESTANCO EL CAMINO" firstIcon="menu"/>

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
                  source={require("../assets/imagen/ESTANCOELCAMINO.png")}
                ></Image>
                <Text style={styles.title}> {""} {"ESTANCO EL CAMINO\n"}</Text>
              </View>

              <Text
                style={styles.negrita}
              >{`RAZÓN SOCIAL CORPORACIÓN ESTANCO EL CAMINO 
          \nTELEFENO 3103020553 
          \nESTANCO Y CLUB NOCTURNO
          \nHORARIO JUEVES A DOMINGO
          \nHORA 9:00 P.M - 5:00 A.M
          \nDIRECCIÓN: CALLE 75B  #5-109 a 5-1`}</Text>
            </View>
            <TouchableOpacity
              //onPress={() => navigation.navigate("")}
              style={{
                backgroundColor: "orange",
                padding: 10,
                width: "40%",
                borderRadius: 5,
                marginRight: 5,
                marginLeft: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  color: "white",
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
    width: "100%",
    height: 735,
  },

  title: {
    fontWeight: "bold",
    fontSize: 25,
    position: "relative",
    textAlign: "center",
  },
  tittles: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  negrita: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 5
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
    height: 55,
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
    //justifyContent: 'space-between'
  },
  view: {
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "8%",
  },
});
