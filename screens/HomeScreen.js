import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import DATA from "../utils/dishes.json";
import Card from "../components/card";
import Card2 from "../components/card2";

const BlueButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.blueButton}>
    <Text style={styles.blueButtonText}>{title}</Text>
  </TouchableOpacity>
);

const LineBreak = ({ height }) => (
  <View style={[styles.line, { height: height }]} />
);

export default function HomeScreen({
  navigation,
  data,
  filteredData,
  setFilteredData,
}) {
  const [inputText, setInputText] = useState("");
  const filterData = (text) => {
    const filtered = DATA.filter((item) => {
      const dishName = item.dish.toLowerCase();
      return dishName.includes(text.toLowerCase());
    });
    setFilteredData(filtered);
  };
  const setItems1 = () => {
    setFilteredData(DATA);
  };
  const setItems2 = () => {
    let arr = DATA;
    arr = arr.reverse();
    setFilteredData(arr);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topLeft}>
        <Text style={[styles.text, { color: "#1b2352" }]}>Good Morning</Text>
        <Text style={[styles.text, { color: "#1b2352" }]}>Mr. Joe!</Text>
      </View>
      <View style={styles.searchContainer}>
        <Icon
          name="search"
          size={20}
          color="#708090"
          style={styles.searchIcon}
        />
        <TextInput
          style={[styles.input, { color: "#1b2352" }]}
          placeholder="Search"
          value={inputText}
          onChangeText={(text) => {
            setInputText(text);
            filterData(text);
          }}
        />
        <Icon
          name="filter"
          size={20}
          color="#000"
          style={styles.icon}
          onPress={() => navigation.navigate("Filters")}
        />
      </View>
      <View>
        <View style={styles.buttonsR}>
          <TouchableOpacity style={styles.cancel} onPress={setItems1}>
            <Text style={{ color: "#1b2352", fontSize: 25 }}>Restaurants</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancel} onPress={setItems2}>
            <Text style={{ color: "#1b2352", fontSize: 25 }}>Cooking</Text>
          </TouchableOpacity>
        </View>
        <LineBreak height={1} />
      </View>
      <View style={styles.hero}>
        <View>
          <Text style={{ color: "#1b2352", fontSize: 25 }}>
            Satisfy your cravings
          </Text>
          <Text style={{ color: "#1b2352" }}>
            Restaurants that suit your palate
          </Text>
        </View>
        <View>
          <BlueButton
            title="View All"
            onPress={() => navigation.navigate("Satisfy your Cravings")}
          />
        </View>
      </View>
      <View style={{ margin: 10 }}>
        <FlatList
          horizontal
          data={filteredData}
          renderItem={({ item }) => (
            <Card2
              cuisine={item.cuisine}
              diet={item.diet}
              dish={item.dish}
              hotel={item.hotel}
              imageSource={require("../assets/bg1.jpg")}
              protien={item.protien}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
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
  cancel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    color: "#1b2352",
    fontSize: 25,
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
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#1b2352",
    marginVertical: 10,
  },
  buttonsR: {
    flexDirection: "row",
    marginTop: 30,
  },
});
