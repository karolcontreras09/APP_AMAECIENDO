import React from "react";

//import Estancossur from "../Screens/Estancossur";
import PagInicio from "../Screens/PagInicio";
import Zonas from "../Screens/Zonas";
import Nortezona from "../Screens/Nortezona";
import Oestezona from "../Screens/Oestezona";
import Surzona from "../Screens/Surzona";
import Estezona from "../Screens/Estezona";
import Esteone from "../Screens/Esteone";
import Estancosurone from "../Screens/Estancosurone";
//import Estancosnorte from "../Screens/Estancosnorte";
import Norteone from "../Screens/Norteone";
//import Estancoseste from "../Screens/Estancoseste";
//import Estancosoeste from "../Screens/Estancosoeste";
import Oesteone from "../Screens/Oesteone"
import Registrate from "../Screens/Registrate";
import Olvidocontraseña from "../Screens/Olvidocontraseña";
import Recuperarcontra from "../Screens/Recuperarcontra";




import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";



const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="pag_inicio">
        <Stack.Screen
          name="pag_inicio"
          component={PagInicio}
          options={{
            title: "INICIAR SESION",
            headerShown: false,
          }}
        />
        <Stack.Screen
         name="registrate"
          component={Registrate}
          options={{
            title: "REGISTRATE",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="zonas"
          component={Zonas}
          options={{
            title: "ZONAS",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="nortezona"
          component={Nortezona}
          options={{
            title: "MAPA ZONA NORTE",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="oestezona"
          component={Oestezona}
          options={{
            title: "MAPA ZONA OESTE",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="surzona"
          component={Surzona}
          options={{
            title: "MAPA ZONA SUR",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="estezona"
          component={Estezona}
          options={{
            title: "MAPA ZONA ESTE",
            headerShown: false,
          }}
        />
      
        <Stack.Screen
          name="surone"
          component={Estancosurone}
          options={{
            title: "ESTANCO SUR",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="esteone"
          component={Esteone}
          options={{
            title: "ESTANCO ESTE",
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="norteone"
          component={Norteone}
          options={{
            title: "ESTANCO ",
            headerShown: false,
          }}
        />
  
        <Stack.Screen
          name="oesteone"
          component={Oesteone}
          options={{
            title: "ESTANCOS OESTE",
            headerShown: false,
          }}
        />
          <Stack.Screen
          name="olvido"
          component={Olvidocontraseña}
          options={{
            title: "ESTANCOS OESTE",
            headerShown: false,
          }}
        />
          <Stack.Screen
          name="recuperar"
          component={Recuperarcontra}
          options={{
            title: "RECUPERAR",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
