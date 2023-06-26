import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { Vehicle } from "../types";

interface VehicleScreenProps {
  vehicle: Vehicle;
  onCallDriver: (phoneNumber: string) => void;
  onSendMessage: (phoneNumber: string, message: string) => void;
}

const VehicleScreen: React.FC<VehicleScreenProps> = ({
  vehicle,
  onCallDriver,
  onSendMessage,
}) => {
  return (
    <View style={styles.container}>
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
        onPress={() =>
          onSendMessage(
            vehicle.driverContact,
            "Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе"
          )
        }
      />
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
