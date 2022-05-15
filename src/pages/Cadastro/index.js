import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebaseConnection";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {}, []);

  // Aqui fazemos o cadastro de um novo Usuário.
  function fazerCadastro() {
    setLoading(true);
    if (email === "" || password === "") {
      Alert.alert(
        "Houstom temos um problema!",
        "Por favor preencha todos os campos corretamente."
      );
      setLoading(false);
      return;
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          let user = userCredential.user;
          navigation.navigate("Login");
          Alert.alert("Parabéns!", "Usuário cadastrado com sucesso.");
        })
        .catch((error) => {
          console.log(error);
          Alert.alert("Ops!", "Parece que algo deu errado.");
          return;
        });
      setEmail("");
      setPassword("");
      Keyboard.dismiss();
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Cadastre seu e-mail"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        keyboardType="numeric"
        style={[styles.input, { marginBottom: 10 }]}
        placeholder="Registre sua senha"
        secureTextEntry={true}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />

      {loading ? (
        <ActivityIndicator size={25} color={"#FF0000"} />
      ) : (
        <Button title="Cadastrar" onPress={fazerCadastro} disabled={loading} />
      )}

      <TouchableOpacity
        style={{ marginTop: 10 }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{ color: "#FF0000" }}> Voltar para Login </Text>
      </TouchableOpacity>
    </View>
  );
}
