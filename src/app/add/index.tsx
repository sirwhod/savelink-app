import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import Categories from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";
import { linkStorage } from "@/storage/link-storage";

export default function Add() {
  const [category, setCategory] = useState("")
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")

  async function handleAdd() {
    try {
      if (!category) {
        return Alert.alert('Categoria','Selecione uma categoria')
      }
      if (!name.trim()) {
        return Alert.alert('Nome','Informe o nome')
      }
      if (!url) {
        return Alert.alert('URL','Informe a URL')
      }

      await linkStorage.save({
        id: new Date().getTime().toString(),
        category,
        name,
        url
      })
  
      console.log({category, name, url})
    } catch (err) {
      Alert.alert('Erro','Não foi possível salvar o link')
      console.error(err)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>

      <Categories onChange={setCategory} selected={category} />

      <View style={styles.form}>
        <Input 
          placeholder="Nome do Link"
          onChangeText={setName}
          autoCorrect={false}
        />
        <Input 
          placeholder="URL"
          onChangeText={setUrl}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Button title="Adicionar" onPress={handleAdd}/>
      </View>
    </View>
  )
}