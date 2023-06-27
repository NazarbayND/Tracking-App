import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";

import VehicleMapView from "../components/VehicleMapView";
import VehicleList from "../components/VehicleList";
import vehiclesDataJson from "../data/vehicles.json";
import { Category, Vehicle, VehicleListScreenNavigationProp } from "../types";

const vehiclesData = vehiclesDataJson as Vehicle[];

type Props = {
  navigation: VehicleListScreenNavigationProp;
};

const VehicleListScreen: React.FC<Props> = ({ navigation }) => {
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
        <Text style={styles.title}>Filter by:</Text>
        <Button title="All" onPress={() => setVehicles(vehiclesData)} />
        <Button title="Cargo" onPress={() => filterVehicles(Category.Cargo)} />
        <Button
          title="Passenger"
          onPress={() => filterVehicles(Category.Passenger)}
        />
        <Button title="Special" onPress={() => filterVehicles(Category.Spec)} />
      </View>
      {showMap ? (
        <VehicleMapView vehicles={vehicles} />
      ) : (
        <VehicleList vehicles={vehicles} navigation={navigation} />
      )}
      <Button
        title={showMap ? "Switch to List View" : "Switch to Map View"}
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
