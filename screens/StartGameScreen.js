import { Button, StyleSheet, TextInput, View } from "react-native";
import PrimaryButtons from "../components/PrimaryButtons";

function StartGameScreen() {
  return (
    <View style={styles.screen}>
      <TextInput placeholder="Number" />
      {/* <Button title="Start Game" /> */}
      <PrimaryButtons>Reset</PrimaryButtons>
      <PrimaryButtons>Start Game</PrimaryButtons>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    marginTop: 100,
    marginHorizontal: 20,
    padding: 16,
    alignItems: "center",
    backgroundColor: "#72063c",
    borderRadius: 8,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default StartGameScreen;
