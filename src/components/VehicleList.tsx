import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import VehicleItem from "./VehicleItem";
import { Vehicle, VehicleListScreenNavigation } from "../types";

interface VehicleItemProps {
  vehicles: Vehicle[];
}

const VehicleList: React.FC<VehicleItemProps> = ({ vehicles }) => {
  const navigation = useNavigation<VehicleListScreenNavigation>();

  const handleNavigate = (vehicle: Vehicle) => {
    navigation.navigate("Vehicle", { vehicle });
  };

  return (
    <FlatList
      data={vehicles}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <VehicleItem
          vehicle={item}
          onPress={() => {
            handleNavigate(item);
          }}
        />
      )}
    />
  );
};

export default VehicleList;
