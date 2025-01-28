import { StyleSheet, View, Text } from "react-native";
import React from "react";


export default function SecondScreen({ route }) {




return(
    <View style={styles.container}>
        <Text> Second Screen </Text>
    </View>
)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})