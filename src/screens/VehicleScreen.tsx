import React from "react";
import { StyleSheet, View, Text, Button, Linking } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import { RootStackParamList } from "../types";
import { renderMarkerIcon } from "../components/VehicleMapView";
import { getName } from "../helpers/getName";

type VehicleScreenRouteProp = RouteProp<RootStackParamList, "Vehicle">;

const VehicleScreen = () => {
  const route = useRoute<VehicleScreenRouteProp>();
  const { t } = useTranslation();

  const { vehicle } = route.params;
  const { coordinate } = vehicle;

  const onCallDriver = (phoneNumber: string) => {
    const url = `tel:${phoneNumber}`;

    Linking.openURL(url)
      .then(() => {
        console.log("Phone call initiated successfully");
      })
      .catch((error) => {
        console.log("An error occurred while making the phone call:", error);
      });
  };

  const onSendMessage = (phoneNumber: string) => {
    const message = t("action.message");

    let url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    Linking.openURL(url)
      .then(() => {
        console.log("WhatsApp opened successfully");
      })
      .catch((error) => {
        console.log("An error occurred while opening WhatsApp:", error);
      });
  };

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
      <Text style={styles.title}>{getName(t("app.item"), vehicle.id)}</Text>
      <Text style={styles.subtitle}>{`${t("vehicle.category")}: ${
        vehicle.category
      }`}</Text>
      <Text style={styles.subtitle}>{`${t("vehicle.driverName")}: ${
        vehicle.driverName
      }`}</Text>
      <Text style={styles.subtitle}>{`${t("vehicle.driverContact")}: ${
        vehicle.driverContact
      }`}</Text>
      <Button
        title={t("action.call")}
        onPress={() => onCallDriver(vehicle.driverContact)}
      />
      <Button
        title={t("action.sendMessage")}
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
