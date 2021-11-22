import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 16 + getStatusBarHeight(),
    paddingBottom: 32,
    alignItems: 'center',
    justifyContent: "flex-start",
    backgroundColor: '#fff',
  },
  title: {
    color: theme.colors.text,
    width: '100%',
    fontSize: 25,
    textAlign: "left",
    paddingHorizontal: 32,
    marginVertical: 22,
    fontFamily: theme.fonts.dmBold,
  },
  subtitle: {
    color: theme.colors.text,
    width: '100%',
    fontSize: 16,
    textAlign: "left",
    paddingHorizontal: 32,
    fontFamily: theme.fonts.dmBold,
  },
  dateCard:{
    width: 146,
    height: 146,
    backgroundColor: '#F2F4F3',
    borderRadius: 20,
    overflow: "hidden",
    borderColor: '#E83F5B8C',
    borderWidth: 7,
    marginVertical: 35,
  },
  dateButton:{
    flex: 1,
    justifyContent: "center",
  },
  dateSubtitle: {
    fontSize: 37,
    fontWeight: "bold",
    textAlign: "center",
    color: '#E83F5B',
    fontFamily: theme.fonts.jost,
  },
  dateTitle: {
    fontSize: 15,
    color: '#E83F5B',
    textAlign: "center",
    fontFamily: theme.fonts.jost,
  },
  inputField: {
    flexDirection: "row",
    width: '100%',
    paddingHorizontal: 32,
    paddingVertical: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalContainer:{
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    overflow: 'hidden',
    paddingVertical: 45,
  },
  modalTitle:{
    color: theme.colors.text,
    width: '100%',
    fontSize: 23,
    textAlign: "left",
    paddingHorizontal: 32,
    marginVertical: 22,
    fontFamily: theme.fonts.dmBold,
  },
  hourShow: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 55,
    paddingHorizontal: 32,
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  hourContainer: {
    width: 90,
    height: 90,
    backgroundColor: '#F2F4F3',
    borderRadius: 20,
    overflow: "hidden",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  cardTitle: {
    color: theme.colors.text,
    fontSize: 18,
    width: '100%',
    textAlign: "center",
    paddingBottom: 13,
    fontFamily: theme.fonts.dmBold,
  },
  possibleRequests:{
    color: theme.colors.text,
    fontSize: 22,
    width: '100%',
    textAlign: "left",
    paddingBottom: 6,
    marginLeft: 12,
    fontFamily: theme.fonts.dmBold,
  },
  cardSubitle: {
    fontSize: 13,
    color: '#E83F5B',
    fontFamily: theme.fonts.jost,
  },
  timeText: {
    fontSize: 32.17,
    fontWeight: "bold",
    color: '#E83F5B',
    fontFamily: theme.fonts.jost,
  },
});