import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
  ActivityIndicator,
} from "react-native";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebaseConnection";

import { useNavigation } from "@react-navigation/native";
import { LogBox } from "react-native";

import styles from "./styles.js";

LogBox.ignoreAllLogs(true);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  // Aqui fazemos o Login do Usuário
  function loginUsuario() {
    setLoading(true);
    if (email === "" || password === "") {
      Alert.alert(
        "Houstom temos um problema!",
        "Por favor preencha todos os campos corretamente."
      );
      setLoading(false);
      return;
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          let user = userCredential.user;
          navigation.navigate("Home");
          Alert.alert("Hello!", "Seja bem-vindo.");
        })
        .catch((error) => {
          Alert.alert("Ops!", "Parece que algo deu errado.");
          console.log(error);
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
      <Text style={styles.text}>Project Firebase</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        onChangeText={(value) => setEmail(value)}
        value={email}
      />
      <TextInput
        keyboardType="numeric"
        style={[styles.input, { marginBottom: 10 }]}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
        value={password}
      />

      {loading ? (
        <ActivityIndicator size={25} color={"#FF0000"} />
      ) : (
        <Button title="Entrar" onPress={loginUsuario} disabled={loading} />
      )}

      <TouchableOpacity
        style={{ marginTop: 10 }}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={{ color: "#FF0000" }}>Clique aqui para se Cadastrar.</Text>
      </TouchableOpacity>
    </View>
  );
}
