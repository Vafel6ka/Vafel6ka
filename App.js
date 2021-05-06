import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import MapScreen from './src/components/MapScreen';

const App = () => {
  return (
    <View style = {styled.container}>
        <MapScreen/>
    </View>
  );
};

const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
