import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Category, Vehicle } from "../types";

const region = {
  latitude: 39.3692,
  longitude: -96.0862,
  latitudeDelta: 15.3193,
  longitudeDelta: 42.7829,
};

interface Props {
  vehicles: Vehicle[];
}

const VehicleMapView: React.FC<Props> = ({ vehicles }) => {
  return (
    <View style={styles.mapContainer}>
      <MapView region={region} style={styles.map}>
        {vehicles.map((vehicle, index) => (
          <Marker
            key={index}
            coordinate={vehicle.coordinate}
            title={vehicle.driverName}
          >
            {renderMarkerIcon(vehicle.category)}
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export const renderMarkerIcon = (category: Category) => {
  switch (category) {
    case Category.Cargo:
      return <MaterialCommunityIcons name={"truck"} size={24} color={"red"} />;
    case Category.Passenger:
      return <MaterialCommunityIcons name={"car"} size={24} color={"blue"} />;
    case Category.Spec:
      return (
        <MaterialCommunityIcons name={"shield"} size={24} color={"gray"} />
      );
    default:
      return <MaterialCommunityIcons name={"circle"} size={24} />;
  }
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default VehicleMapView;
