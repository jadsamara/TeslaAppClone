import { View, Text, FlatList, Dimensions } from "react-native";
import CarItem from "../Caritem";

import styles from "./styles";
import cars from "./cars.js";

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"center"}
        decelerationRate={"end"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarsList;
