import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16+ 50 + getStatusBarHeight(),
    paddingHorizontal: 32,
    justifyContent: "flex-end",
    backgroundColor: theme.colors.white,
  },
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title: {
    color: theme.colors.gold,
    fontWeight: "700",
    fontSize: 32,
    marginBottom: 15,
    textAlign: "left",
    fontFamily: theme.fonts.poppins,
  },
  subtitle: {
    color: theme.colors.text,
    fontSize: 16,
    textAlign: "left",
    fontFamily: theme.fonts.roboto,
  },
  switch: {
    flexDirection: "row",
  }
});