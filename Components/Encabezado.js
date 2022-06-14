import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
const Encabezado = ({ firstIcon, secondIcon, titulo }) => {
  return (
    <View style={(firstIcon || secondIcon) ? styles.view : styles.viewCenter} >         
        {firstIcon && <Icon style={styles.icon} name ={firstIcon} size = {30} color="white"></Icon>}
        {(firstIcon && titulo) ?
            (
            <View style={styles.viewChild}>
                <Text style={styles.tittles}>{titulo}</Text>
            </View>
            ) :
            <Text style={styles.tittles}>{titulo}</Text>
        }
       {secondIcon && <Icon style={styles.icon} name ={secondIcon} size = {30} color="white"></Icon>}
     </View>
  )
}

const styles = StyleSheet.create({
    Imagefondo: {
      width: 413,
      height: 735,
    },
    title: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 22,
      position: "relative",
    },
    tittles: {
      textAlign: "center",
      color: "white",
      fontSize: 25,
      fontWeight: 'bold',
    },
    negrita: {
      fontWeight: "bold",
      fontSize: 16,
    },
    item: {
      marginVertical: 2,
      marginHorizontal: 30,
      alignItems: "center",
      overflow: "hidden",
      marginLeft: 30,
    },
    image: {
      resizeMode: "contain",
      height: 190,
      height: 190,
    },
    imagen: {
      height: 55,
      width: 80,
      resizeMode: "stretch",
    },
    container: {
      flex: 1,
    },
    Container: {
      flex: 1,
    },
    card: {
      height: 450,
      width: 350,
      marginTop: 20,
      marginLeft: 30,
      marginBottom:20,
    },
    text: {
      padding: 10,
    },
    View: {
      margin: 3,
      flexDirection: 'row',
      //justifyContent: 'space-between'
    },
    view:{
      margin: 15,
      flexDirection: 'row',
      marginTop: "8%",
      justifyContent: 'space-between'
     },
     viewChild:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        paddingRight: 40
       },
    viewCenter :{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: "8%",
        height: 50
    }
     

  });
  

export default Encabezado