import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
  },
  title: {
    color: colors.green[900],
    fontSize: 22
  },
  header: {
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row", 
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    width: 32,
    height: 38,
  },
})

export default styles;