import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import Zonas from '../Screens/Zonas';
import { StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator()

export function DrawerNavigation() {

    return (
        <Drawer.Navigator
            drawerContent = { (props) => <MenuItems {...props}/> }
        >
            <Drawer.Screen name="zonas" component = {Zonas}/>

        </Drawer.Navigator>
    )
}

const MenuItems = ({navigation}) => {
    return(
        <DrawerContentScrollView>
            <Text style = {styles.title }> Menú</Text>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create ({
    container:{
        padding: 15,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
    },
})