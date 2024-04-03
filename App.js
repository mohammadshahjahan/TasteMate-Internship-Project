import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import DATA from "./utils/dishes.json";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Card from "./components/card";
import ViewAllScreen from "./screens/ViewAllScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import FilterScreen from "./screens/FilterScreen";

const stack = createNativeStackNavigator();

export default function App() {
  const [filteredData, setFilteredData] = useState(DATA);
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              data={DATA}
              filteredData={filteredData}
              setFilteredData={setFilteredData}
            />
          )}
        </stack.Screen>
        <stack.Screen name="Satisfy your Cravings" component={ViewAllScreen} />

        <stack.Screen name="Filters">
          {(props) => (
            <FilterScreen
              {...props}
              data={DATA}
              filteredData={filteredData}
              setFilteredData={setFilteredData}
            />
          )}
        </stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(112, 128, 144, 0.05)",
  },
  topLeft: {
    paddingTop: 50,
    paddingLeft: 20,
  },
  text: {
    fontSize: 24,
  },
  input: {
    height: 40,
    padding: 10,
    width: "80%",
  },
  searchContainer: {
    backgroundColor: "rgb(255, 255, 255)",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 20,
    width: "80%",
    marginLeft: 30,
    paddingRight: 20,
  },
  searchIcon: {
    marginRight: 10,
    marginLeft: 20,
  },
  hero: {
    margin: 20,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  blueButtonText: {
    color: "#1b2352",
    marginTop: 20,
  },
});
