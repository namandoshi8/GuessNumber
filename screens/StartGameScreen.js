import { Button, StyleSheet, TextInput, View } from "react-native";
import PrimaryButtons from "../components/PrimaryButtons";

function StartGameScreen() {
  return (
    <View style={styles.screen}>
      <TextInput
        // placeholder="Number"
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {/* <Button title="Start Game" /> */}
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButtons>Reset</PrimaryButtons>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButtons>Start Game</PrimaryButtons>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 26,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 10,
    textAlign: "center",
    fontWeight: "bold",
    padding: 0,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
