import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  ScrollView
} from "react-native";
import axios from "axios";
import { LogBox } from 'react-native';
import env from "../env.json";

export default function Registrate({}) {
  const navigation = useNavigation();

  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [error, setError] = useState('');
  

  const handleSubmmit = async () => {
    // 
    try {
      if(nombre !== '' && direccion !== '' &&  usuario !== '' && contrasena !== '' && confirmar !== '') {
        if(contrasena === confirmar) {
          await axios.post(`${env.host}/usuario/registro`, {nombre, direccion, usuario, contrasena });
          navigation.navigate("zonas");
        } else {
          setError("Las contraseñas no coinciden");
        }
      } else {
        setError("Todos los campos se deben llenar");
      }
    } catch (e) {
      console.log(e);
      setError(JSON.stringify(e));
    }
  };

  return (
    <ImageBackground
      style={styles.ImageBackground}
      source={require("../assets/imagen/login.png")}
    >
       <ScrollView style={styles.scrollView}>
      <View style={styles.view}>
        <TextInput 
          placeholder="Nombre"
          style={styles.textInput} 
          onChangeText={setNombre} 
          value={nombre} 
          />
        <TextInput 
          placeholder="Dirección" 
          style={styles.textInput} 
          onChangeText={setDireccion} 
          value={direccion} 
          />
        <TextInput 
          placeholder="👤 Usuario" 
          style={styles.textInput} 
          onChangeText={setUsuario} 
          value={usuario} 
          />
        <TextInput 
          placeholder="🔒 Crear contraseña"
          secureTextEntry style={styles.textInputone}
          onChangeText={setContrasena} 
          value={contrasena} 
          />
        <TextInput 
        placeholder="🔒 Confirmar contraseña" 
        secureTextEntry style={styles.textInputone}
        onChangeText={setConfirmar} 
        value={confirmar} 
        />
        <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "red",
            }}
          >{error}</Text>
        <TouchableOpacity
          onPress={ handleSubmmit }
          style={{
            backgroundColor: "orange",
            padding: 10,
            marginTop: "2%",
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
            Crear Cuenta
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("pag_inicio")}
          style={{
            backgroundColor: "orange",
            padding: 10,
            marginTop: "1%",
            width: "25%",
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
            Volver
          </Text>
        </TouchableOpacity>
        
      </View> 
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ImageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  
  view: {
    marginTop: "74%",
  },

  textInput: {
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
});
