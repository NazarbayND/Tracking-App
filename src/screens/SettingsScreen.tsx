import React, { useState } from "react";
import { StyleSheet, View, Switch, Text } from "react-native";

const SettingsScreen = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish((prevIsEnglish) => !prevIsEnglish);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Language: {isEnglish ? "English" : "Русский"}
      </Text>
      <Switch value={isEnglish} onValueChange={toggleLanguage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default SettingsScreen;
