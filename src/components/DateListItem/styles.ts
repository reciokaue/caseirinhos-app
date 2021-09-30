import { forVerticalIOS } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators";
import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 32,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: '#fd0'
  },
  selected:{
    borderColor: '#E83F5B8C',
    borderWidth: 6,
  },
  rightSide:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hour: {
    fontSize: 14,
    color: theme.colors.text,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4D4D4D',
  },
  radio:{
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: theme.colors.line,
    marginLeft: 16,
  },
});