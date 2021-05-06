import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MapScreen = (props) => {
    return (
        <View style = {styled.container}>
            <Text>
                There will be the map
            </Text>
        </View>
    )
}

export default MapScreen

const styled = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  });