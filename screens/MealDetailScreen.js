// นายปัณณธร กระแสร์วิก 63070106

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({route, navigation}) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const mealId = route.params.mealId

  const meal = MEALS.filter(
    (meal) => meal.id == mealId
  );

  return (
    <View style={styles.screen}>
      <Text>Dish: {meal[0].title}</Text>
      <Text>Steps: {meal[0].steps}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
