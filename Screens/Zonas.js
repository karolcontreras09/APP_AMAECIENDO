import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Zonas({navigation}) {
  return (
    <View style={styles.parent}>
      <TouchableOpacity
        style={styles.boton_norte}
        onPress={() => navigation.push("zonasEstancos", { id_zona: 1 })}
      >
        <Image
          style={styles.fondo}
          source={require("../assets/imagen/norte.png")}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.boton_norte}
        onPress={() => navigation.push("zonasEstancos", { id_zona: 4 })}
      >
        <Image
          style={styles.fondo}
          source={require("../assets/imagen/oeste.png")}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.boton_norte}
        onPress={() => navigation.push("zonasEstancos", { id_zona: 2 })}
      >
        <Image
          style={styles.fondo}
          source={require("../assets/imagen/sur.png")}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.boton_norte}
        onPress={() => navigation.push("zonasEstancos", { id_zona: 3 })}
      >
        <Image
          style={styles.fondo}
          source={require("../assets/imagen/este.png")}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  parent: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  child: {
    width: "48%",
    margin: "1%",
    aspectRatio: 1,
  },
  boton_norte: {
    width: "50%",
    height: "50%",
  },
  fondo: {
    width: "100%",
    height: "100%",
  },
});
