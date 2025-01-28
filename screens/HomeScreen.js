import React from "react";
import { StyleSheet,View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLayoutEffect } from "react";

export default function HomeScreen({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={styles.ionicon}>
                    <Ionicons 
                    name="arrow-forward" 
                    size={24} 
                    onPress={ () => navigation.navigate('Second')}
                    
                    />
                </View>

            )
        });
    },[navigation] );

    return(
        <View style={styles.container}>
            <Text>
                Home Screen
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 40,
    },
    ionicon: {
        marginRight: 10,
    }
})
