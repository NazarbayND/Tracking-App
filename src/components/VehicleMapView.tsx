import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { Vehicle } from "../types";
import MarkerIcon from "./MarkerIcon";

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
            <MarkerIcon category={vehicle.category} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
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
