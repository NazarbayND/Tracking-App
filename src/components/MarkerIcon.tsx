import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Category } from "../types";

interface Props {
  category: Category;
}

const MarkerIcon: React.FC<Props> = ({ category }) => {
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

export default MarkerIcon;
