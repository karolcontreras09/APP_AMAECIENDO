import React from "react";
import {
  SafeAreaView,
  Image,
  FlatList,
  StyleSheet,
  //StatusBar,
  TouchableOpacity,
  ImageBackground,
  Text,
  View
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons'

const DATA = [
  {
    id: 1,
    image: require("../assets/imagen/crobarestanco.png"),
  },
  {
    id: 2,
    image: require("../assets/imagen/PABLOESTANCO.png"),
  },
  {
    id: 3,
    image: require("../assets/imagen/90estanco.png"),
  },
  {
    id: 4,
    image: require("../assets/imagen/ESTANCOELCAMINO.png"),
  },
];

const Item = ({ image, navigation }) => (
  <TouchableOpacity style={styles.item} 
  //onPress={() => navigation.navigate("")}
  >
    <Image source={image} style={styles.image} />
  </TouchableOpacity>
);

export default function Estancosoeste() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Item navigation={navigation} image={item.image} />
  );

  return (
    <ImageBackground
      style={styles.Imagefondo}
      source={require("../assets/imagen/fondo.png")}
    >
    <View style={styles.View}>
      <Text style={styles.tittle}>AMANECIENDO</Text>
      <Icon style={styles.icon} name ="search" size = {30} color="white"></Icon>
    </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Imagefondo: {
    width: 412,
    height: 731,
  },
  container: {
    flex: 1,
    marginTop: 10
    //StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "black",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    resizeMode: "contain",
    height: 180,
    width: 500,
  },
  tittle: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
    fontWeight: 'bold',
  },
  View: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: "7%",
   
   },
});
