import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop:  getStatusBarHeight(),
    paddingHorizontal: 32,
  },
  title: {
    color: theme.colors.text,
    width: '100%',
    fontWeight: "700",
    fontSize: 32,
    marginTop: 100,
    marginBottom: 36,
    textAlign: "left",
    fontFamily: theme.fonts.poppins,
  },

});