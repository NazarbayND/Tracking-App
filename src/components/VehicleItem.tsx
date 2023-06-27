import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";

import { Vehicle } from "../types";
import { getName } from "../helpers/getName";

interface VehicleItemProps {
  vehicle: Vehicle;
  onPress: () => void;
}

const VehicleItem: React.FC<VehicleItemProps> = ({ vehicle, onPress }) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{getName(t("app.item"), vehicle.id)}</Text>
        <Text style={styles.subtitle}>{`${t("vehicle.driverName")}: ${
          vehicle.driverName
        }`}</Text>
        <Text style={styles.subtitle}>{`${t("vehicle.category")}: ${
          vehicle.category
        }`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    elevation: 2,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default VehicleItem;
