import { useLayoutEffect, useState } from "react";
import { TextInput, View, Text, Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import { StyleSheet } from "react-native";




export default function CustomApplicationBar({navigation, route, options, back}) {
    
const title = getHeaderTitle(options, route.name)


    return(
    <Appbar.Header> 
        {back ? 
        (<Appbar.BackAction onPress={navigation.goBack} />)
         :(
            <Appbar.Action 
            icon="arrow-right"
            onPress={() => navigation.navigate('Second')} 
            style={{ position: 'absolute', right: 10 }}         // Aseta oikealle, asetti automaattisesti vasemmalle
            />
        ) }
        <Appbar.Content style={styles.appbar} title={title} />
    </Appbar.Header>
    )
};

const styles = StyleSheet.create({
    appbar: {
       alignItems: 'center',
       justifyContent: 'center',
       fontSize: 0,
    }
})

