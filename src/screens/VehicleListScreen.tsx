import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import VehicleItem from "../components/VehicleItem";
import vehiclesDataJson from "../data/vehicles.json";
import { Vehicle } from "../types";

const vehiclesData = vehiclesDataJson as Vehicle[];

const VehicleListScreen = () => {
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
        <Button title="Filter: All" onPress={() => setVehicles(vehiclesData)} />
        <Button title="Filter: Cargo" onPress={() => filterVehicles("Cargo")} />
        <Button
          title="Filter: Passenger"
          onPress={() => filterVehicles("Passenger")}
        />
        <Button
          title="Filter: Special"
          onPress={() => filterVehicles("Special")}
        />
      </View>
      {showMap ? (
        // Render MapView with markers
        <View style={styles.mapContainer}>{/* Your MapView component */}</View>
      ) : (
        <FlatList
          data={vehicles}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <VehicleItem
              vehicle={item}
              onPress={() => {
                // Navigate to VehicleScreen with vehicle details
              }}
            />
          )}
        />
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
    justifyContent: "space-between",
    marginBottom: 16,
  },
  mapContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VehicleListScreen;
