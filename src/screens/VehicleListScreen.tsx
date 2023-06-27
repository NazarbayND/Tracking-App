import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { useTranslation } from "react-i18next";

import VehicleMapView from "../components/VehicleMapView";
import VehicleList from "../components/VehicleList";
import vehiclesDataJson from "../data/vehicles.json";
import { Category, Vehicle, VehicleListScreenNavigationProp } from "../types";

const vehiclesData = vehiclesDataJson as Vehicle[];

type Props = {
  navigation: VehicleListScreenNavigationProp;
};

const VehicleListScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  const [vehicles, setVehicles] = useState<Vehicle[]>(vehiclesData);
  const [showMap, setShowMap] = useState(false);

  const filterVehicles = (category: string) => {
    const filteredVehicles = vehiclesData.filter(
      (vehicle) => vehicle.category === category
    );
    setVehicles(filteredVehicles);
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Button
          title={t("category.all")}
          onPress={() => setVehicles(vehiclesData)}
        />
        <Button
          title={t("category.cargo")}
          onPress={() => filterVehicles(Category.Cargo)}
        />
        <Button
          title={t("category.passenger")}
          onPress={() => filterVehicles(Category.Passenger)}
        />
        <Button
          title={t("category.spec")}
          onPress={() => filterVehicles(Category.Spec)}
        />
      </View>
      {showMap ? (
        <VehicleMapView vehicles={vehicles} />
      ) : (
        <VehicleList vehicles={vehicles} navigation={navigation} />
      )}
      <Button
        title={showMap ? t("switch.list") : t("switch.map")}
        onPress={() => setShowMap(!showMap)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  filterContainer: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
  },
});

export default VehicleListScreen;
