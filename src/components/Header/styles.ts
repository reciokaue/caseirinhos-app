import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    position: "absolute",
    top: getStatusBarHeight(),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 45,
    paddingVertical: 9,
  },
  title:{
    fontSize: 16,

  }
});