import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButtons({ children }) {
  function handlePress() {
    console.log("Button pressed!");
  }
  return (
    <View style={styles.buttonOuter}>
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [styles.buttonInner, pressed && styles.pressed]}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
        {/* <Text>{children}</Text> */}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuter: {
    borderRadius: 25,
    margin: 4,
    overflow: "hidden",
  },
  buttonInner: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});

export default PrimaryButtons;
