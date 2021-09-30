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
  title: {
    color: theme.colors.gold,
    fontSize: 32,
    marginBottom: 34,
    textAlign: "center",
    fontFamily: theme.fonts.poppins,
  },
  subtitle: {
    color: theme.colors.text,
    fontSize: 16,
    marginBottom: 56,
    textAlign: "center",
    fontFamily: theme.fonts.dmRegular,
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  line: {
    width: 102,
    height: 1,
    backgroundColor: theme.colors.text,
    marginHorizontal: 16,
  },
  separatorText: {
    color: theme.colors.text,
    fontSize: 12,
  },
  goLogin: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  loginQuestion: {
    color: theme.colors.text,
    fontSize: 12,
    fontFamily: theme.fonts.roboto,
  },
  doLogin: {
    color: theme.colors.gold,
    fontSize: 12,
    marginLeft: 5,
    textDecorationLine: "underline",
    fontFamily: theme.fonts.roboto,
  },
});