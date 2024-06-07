import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, View } from "react-native";
import Context, { AnimeContext } from "./src/API/Context"
import Tabs from "./src/components/Tabs"

function App() {
  const { darkTheme } = useContext(AnimeContext);

  return (

    
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#282C35" : "white",
      }}
    >
      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
      <NavigationContainer>
        <Context>
          <App />
        </Context>
      </NavigationContainer>
  );
};