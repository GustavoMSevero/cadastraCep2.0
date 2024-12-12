import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewInput: {
      width: "70%",
    },
    input: {
      backgroundColor: "#e6f2ff",
      width: "100%",
      height: 50,
      marginBottom: 10,
      borderRadius: 10,
      paddingLeft: 10,
    },
    button: {
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: "lightgreen",
      width: "70%",
      alignItems: "center",
      justifyContent: "center",
      height: 50,
      borderRadius: 20,
    },
    textButton: {
      fontWeight: "bold",
    },
    buttonCadastra: {
      backgroundColor: "lightblue",
      width: "70%",
      alignItems: "center",
      justifyContent: "center",
      height: 50,
      borderRadius: 20,
      marginBottom: 20,
    },
    textButtonCadastra: {
      fontWeight: "bold",
    },
    buttonListagem: {
      backgroundColor: "yellow",
      width: "70%",
      alignItems: "center",
      justifyContent: "center",
      height: 50,
      borderRadius: 20,
      marginBottom: 20,
    },
    textButtonListagem: {
      fontWeight: "bold",
    }
  });

  export default styles;