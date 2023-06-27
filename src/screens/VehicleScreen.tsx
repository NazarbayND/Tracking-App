import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { RouteProp, useRoute } from "@react-navigation/native";

import { RootStackParamList } from "../types";
import { renderMarkerIcon } from "../components/VehicleMapView";

type VehicleScreenRouteProp = RouteProp<RootStackParamList, "Vehicle">;

const VehicleScreen = () => {
  const route = useRoute<VehicleScreenRouteProp>();

  const { vehicle } = route.params;
  const { coordinate } = vehicle;

  const onCallDriver = (phone: string) => {};

  const onSendMessage = (phone: string) => {};

  return (
    <View style={styles.container}>
      <MapView
        region={{
          ...coordinate,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }}
        style={styles.map}
      >
        <Marker
          key={"marker"}
          coordinate={vehicle.coordinate}
          title={vehicle.driverName}
        >
          {renderMarkerIcon(vehicle.category)}
        </Marker>
      </MapView>
      <Text style={styles.title}>{`ТС #${vehicle.id}`}</Text>
      <Text style={styles.subtitle}>{`Category: ${vehicle.category}`}</Text>
      <Text style={styles.subtitle}>{`Driver: ${vehicle.driverName}`}</Text>
      <Text style={styles.subtitle}>{`Contact: ${vehicle.driverContact}`}</Text>
      <Button
        title="Call"
        onPress={() => onCallDriver(vehicle.driverContact)}
      />
      <Button
        title="Send Message"
        onPress={() => onSendMessage(vehicle.driverContact)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "40%",
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default VehicleScreen;
