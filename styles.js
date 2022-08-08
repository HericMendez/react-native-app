import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a2a2a",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 24,
  },

  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 5,
    margin: 15,
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  cardSubtitle: {
    fontSize: 14,
    color: "#999",
    marginBottom: 10,
  },
});

export default Styles;
