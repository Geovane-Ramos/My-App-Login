import React from "react";
import { View, Text, Button, Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebaseConnection";
import styles from "./styles";

export default function Home() {
  const navigation = useNavigation();

  function saindoPagina() {
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
        Alert.alert("Parabéns!", "Deslogado com sucesso.");
      })
      .catch((error) => console.log(error));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textHome}>SEJA MUITO BEM-VINDO!</Text>
      <Text style={styles.textHome}>OBRIGADO POR TER VINDO :)</Text>
      <Button title="Sair da Página" onPress={saindoPagina} />
    </View>
  );
}
