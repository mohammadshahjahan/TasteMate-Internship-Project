import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Card2 = ({ imageSource, dish, hotel, cuisine, protien, diet }) => {
  return (
    <ImageBackground source={imageSource} style={styles.cardBackground}>
      <View style={styles.overlay}>
        <View style={styles.likeIconContainer}>
          <FontAwesome name="heart" size={24} color="black" />
        </View>
        <View style={styles.bookmarkIconContainer}>
          <FontAwesome name="bookmark" size={24} color="white" />
        </View>
        <Text style={styles.dishText}>{dish}</Text>
        <Text style={styles.hotelText}>{hotel}</Text>
        <View style={styles.bottomText}>
          <Text style={styles.bottom}>{diet} | </Text>
          <Text style={styles.bottom}>{cuisine} | </Text>
          <Text style={styles.bottom}>{protien}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cardBackground: {
    height: 260, // Adjust the height as needed
    width: 180, // Adjust aspect ratio as needed
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    alignItems: "baseline",
    justifyContent: "flex-end",
    padding: 10,
  },

  likeIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  bookmarkIconContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  dishText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  hotelText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  bottom: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
  },
  bottomText: {
    flexDirection: "row",
  },
});

export default Card2;
