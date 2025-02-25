import { Text, View } from "react-native";

function PrimaryButtons(props) {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
}

export default PrimaryButtons;
