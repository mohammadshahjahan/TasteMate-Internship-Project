import React from "react";
import DATA from "../utils/dishes.json";
import Card from "../components/card";

import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";


const ViewAllScreen = () => {
  return (
    <ScrollView style={{ paddingLeft: 10 }}>
      <View style={styles.itemsWrap}>
        {DATA.map((e) => (
          <Card
            cuisine={e.cuisine}
            diet={e.diet}
            dish={e.dish}
            hotel={e.hotel}
            imageSource={require("../assets/bg1.jpg")}
            protien={e.protein}
            key={e.id}
            style={styles.item}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemsWrap: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 5,
    rowGap: 10,
  },
  item: {
    margin: 5,
  },
});

export default ViewAllScreen;
