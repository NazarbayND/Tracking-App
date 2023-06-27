import React from "react";
import { FlatList } from "react-native";

import VehicleItem from "./VehicleItem";
import { Vehicle, VehicleListScreenNavigationProp } from "../types";

interface VehicleItemProps {
  vehicles: Vehicle[];
  navigation: VehicleListScreenNavigationProp;
}

const VehicleList: React.FC<VehicleItemProps> = ({ vehicles, navigation }) => {
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
