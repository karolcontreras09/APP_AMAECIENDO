import React from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Encabezado from "../Components/Encabezado";

const DATA = [
  {
    id: 1,
    image: require("../assets/imagen/90estanco.png"),
  },
];
const { Height } = Dimensions.get("window");

export default function Estancosurone() {
  const renderItem = ({ item }) => <Item image={item.image} />;

  const Item = ({ image }) => (
    <View style={styles.item}>
      <Image source={image} style={styles.image} />
    </View>
  );
  return (
    <ImageBackground
      style={styles.Imagefondo}
      source={require("../assets/imagen/fondo.png")}
      resizeMode="repeat"
    >
      <Encabezado titulo="ESTANCO DEL 90" firstIcon="menu" />

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
                  source={require("../assets/imagen/90estanco.png")}
                ></Image>

                <Text style={styles.title}>
                {"\n"} {"ESTANCO DEL 90\n"}</Text>
              </View>

              <Text
                style={styles.negrita}
              >{"\n"}{`RAZÓN SOCIAL CORPORACIÓN ESTANCO DEL 90
          \nTELEFENO 3152563245 
          \nESTANCO Y CLUB NOCTURNO
          \nHORARIO JUEVES A DOMINGO
          \nHORA 8:00 P.M - 4:00 A.M
          \nDIRECCIÓN: CALLE 17c Sur #29-2 a 29-94`}</Text>
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
    resizeMode: 'contain',
    flex: 1
  },
  title: {
    fontSize: 22,
    margin: 90,
    fontWeight: "bold",
    position:"absolute",
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
    alignItems: "center",
    justifyContent: 'space-between'
  },
  view: {
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "8%",
  },
});
