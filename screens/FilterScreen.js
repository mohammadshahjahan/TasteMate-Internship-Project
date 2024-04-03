import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

const BlueButton = ({ title, onPress, isBlue }) => (
  <TouchableOpacity
    onPress={onPress} // Use onPress instead of usePress
    style={[styles.blueButton, isBlue && styles.blueButtonPressed]}
  >
    <Text
      style={[styles.blueButtonText, isBlue && styles.blueButtonTextPressed]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

const LineBreak = ({ height }) => (
  <View style={[styles.line, { height: height }]} />
);

const FilterScreen = ({ navigation, data, filteredData, setFilteredData }) => {
  const [pressedButton1, setPressedButton1] = useState(null);
  const [pressedButton2, setPressedButton2] = useState(null);
  const [pressedButton3, setPressedButton3] = useState(null);
  const [pressedButton4, setPressedButton4] = useState(null);
  const [pressedButton5, setPressedButton5] = useState(null);
  const [pressedButton6, setPressedButton6] = useState(null);
  const [pressedButton7, setPressedButton7] = useState(null);

  const handleCancel = () => {
    navigation.goBack();
  };

  const filter = () => {
    const d = filteredData.filter(f);
    function f(e) {
      if (pressedButton1 && e.diet === "Vegetarian") return true;
      if (pressedButton2 && e.diet === "Non-Vegetarian") return true;
      if (pressedButton3 && e.diet === "Vegan") return true;
      if (pressedButton4 && e.cuisine === "Indian") return true;
      if (pressedButton5 && e.cuisine === "Mediterranean") return true;
      if (pressedButton6 && e.protein === "Chicken") return true;
      if (pressedButton7 && e.protein === "Beef") return true;

      return false;
    }
    setFilteredData(d);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Diet</Text>
      <View style={styles.buttons}>
        <View>
          <BlueButton
            title="Vegetarian"
            onPress={() => setPressedButton1("vegetarian")}
            isBlue={pressedButton1 === "vegetarian"}
          />
        </View>
        <View>
          <BlueButton
            title="Non Vegetarian"
            onPress={() => setPressedButton2("non-vegetarian")}
            isBlue={pressedButton2 === "non-vegetarian"}
          />
        </View>
        <View>
          <BlueButton
            title="Vegan"
            onPress={() => setPressedButton3("vegan")}
            isBlue={pressedButton3 === "vegan"}
          />
        </View>
      </View>
      <View style={styles.empty}></View>
      <Text style={styles.text}>Cuisines</Text>
      <View style={styles.buttons}>
        <View>
          <BlueButton
            title="Indian"
            onPress={() => setPressedButton4("Indian")}
            isBlue={pressedButton4 === "Indian"}
          />
        </View>
        <View>
          <BlueButton
            title="Mediterranean"
            onPress={() => setPressedButton5("Mediterranean")}
            isBlue={pressedButton5 === "Mediterranean"}
          />
        </View>
      </View>
      <View style={styles.empty}></View>
      <Text style={styles.text}>Protiens</Text>
      <View style={styles.buttons}>
        <View>
          <BlueButton
            title="Chicken"
            onPress={() => setPressedButton6("Chicken")}
            isBlue={pressedButton6 === "Chicken"}
          />
        </View>
        <View>
          <BlueButton
            title="Beef"
            onPress={() => setPressedButton7("beef")}
            isBlue={pressedButton7 === "beef"}
          />
        </View>
      </View>
      <View style={styles.last}>
        <LineBreak height={1} />
        <View style={styles.lastButtons}>
          <TouchableOpacity style={styles.cancel} onPress={handleCancel}>
            <Text>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.apply} onPress={filter}>
            <Text style={{ color: "white" }}>Apply Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(112, 128, 144, 0.05)",
    paddingTop: 39,
    paddingLeft: 20,
  },
  text: {
    fontSize: 50,
  },
  buttons: {
    flexDirection: "row",
    columnGap: 10,
  },
  blueButtonText: {
    color: "#1b2352",
  },
  blueButtonTextPressed: {
    color: "white",
  },
  blueButton: {
    borderRadius: 30,
    borderColor: "#1b2352",
    borderWidth: 2,
    padding: 20,
  },
  blueButtonPressed: {
    backgroundColor: "#1b2352",
  },
  empty: {
    marginTop: 20,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#1b2352",
    marginVertical: 10,
  },
  lastButtons: {
    flexDirection: "row",
    columnGap: 10,
  },
  cancel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  apply: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1b2352",
    height: 50,
    borderRadius: 10,
  },
  last: {
    position: "absolute",
    bottom: -220,
    width: "100%",

    paddingHorizontal: 20,
  },
});

export default FilterScreen;
