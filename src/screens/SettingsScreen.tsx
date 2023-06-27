import React, { useState } from "react";
import { StyleSheet, View, Switch, Text } from "react-native";
import { useTranslation } from "react-i18next";

import { changeLanguage } from "../i18n";

const SettingsScreen = () => {
  const { t } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    changeLanguage(isEnglish ? "ru" : "en");
    setIsEnglish((prevIsEnglish) => !prevIsEnglish);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t("settingsScreen.language")}</Text>
      <View style={styles.switch}>
        <Text style={styles.text}>{t("settingsScreen.russian")}</Text>
        <Switch value={isEnglish} onValueChange={toggleLanguage} />
        <Text style={styles.text}>{t("settingsScreen.english")}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  switch: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 16,
  },
  text: {
    fontSize: 18,
  },
});

export default SettingsScreen;
