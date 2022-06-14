import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  View, 
  Image

} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import env from "../env.json";
import axios from "axios";
export default function PagInicio({}) {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = async () => {
    console.error("Hola");
    try {
      const resp = await axios.post(`${env.host}/login`, {email: user, password: pass});
      navigation.navigate("zonas");
      console.error("resp");
    } catch (e) {
      console.error(e.toString());
    }
  }

  return (
  
  <View>
    <ImageBackground
      style={styles.ImageBackground}
      source={require("../assets/imagen/login.png")}
    >
   
      <ScrollView style={styles.scrollView}> 
        <TextInput placeholder="👤 Usuario" style={styles.textInput} onChangeText={ setUser }  />
        <TextInput
          placeholder="🔒 *****"
          style={styles.textInputone} 
          password={true}
          secureTextEntry={true}
          onChangeText={ setPass } 
        />
    
        <TouchableOpacity
          onPress={ handleSubmit }
          style={{
            backgroundColor: "orange",
            padding: 10,
            marginTop: "10%",
            width: "50%",
            alignSelf: "center",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "white",
            }}
          >
            {" "}
            Ingresar
          </Text>
        </TouchableOpacity> 


         <View style={styles.boton} >

        <TouchableOpacity
          // onPress={() => navigation.navigate("")}
          style={{
            backgroundColor: "gray",
            padding: 10
            ,
            marginTop: "4%",
            width: "55%",
            alignSelf: "center",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              color: "white",
            }}
          >
            {" "}
            <Image 
            style={styles.google}
            source={require("../assets/imagen/marcas-y-logotipos.png")}/>  {" "}
            Acceder con Google
          </Text>
        </TouchableOpacity>
        

        <TouchableOpacity
          onPress={() => navigation.navigate("registrate")}
          style={{
            backgroundColor: "orange",
            padding: 10,
            marginTop: "4%",
            width: "40%",
            alignSelf: "center",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "white",
            }}
          >
            {" "}
            Registrate
          </Text>
        </TouchableOpacity>
    </View>
        <TouchableOpacity onPress={() => navigation.navigate("olvido")}
        
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              marginTop: "5%",
              color: "white",
            }}
          >
            {" "}
            Olvido su contraseña?{" "}
          </Text>
        </TouchableOpacity> 
         </ScrollView>
    
    </ImageBackground></View>
  );
}

const styles = StyleSheet.create({
  ImageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    width: "90%",
    height: 50,
    marginTop: "90%",
    marginLeft: "5%",
    marginRight: "50%",
    borderColor: 30,
    backgroundColor: "transparent",
  },
  textInputone: {
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    width: "90%",
    height: 50,
    marginTop: "2%",
    marginLeft: "5%",
    marginRight: "50%",
    borderColor: 30,
    backgroundColor: "transparent",
  },

  boton: {
    margin: 20,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  google: {
    width: 20,
    height: 20,
  }
}
)
