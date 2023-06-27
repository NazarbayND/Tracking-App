import { StackNavigationProp } from "@react-navigation/stack";

export interface Vehicle {
  id: number;
  driverName: string;
  driverContact: string;
  category: Category;
  coordinate: Coordinate;
}

export enum Category {
  Cargo = "Cargo",
  Passenger = "Passenger",
  Spec = "Special vehicle",
}

export interface Coordinate {
  latitude: number;
  longitude: number;
}

export type RootStackParamList = {
  VehicleList: undefined;
  Vehicle: { vehicle: Vehicle };
};

export type VehicleListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "VehicleList"
>;
