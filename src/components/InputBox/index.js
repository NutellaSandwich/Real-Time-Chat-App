import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';

const InputBox = () => {
  
  const [newMessage, setNewMessage] = useState('');
  
  const onSend = () => {
    console.warn("Sending a new message: ", newMessage);
    setNewMessage('');
  }

  return (
    <SafeAreaView edges={['bottom']} style = {styles.container}>
        <AntDesign name = "plus" size={24} color="royalblue" />
        <TextInput value={newMessage} onChangeText={setNewMessage} style = {styles.input} placeholder="type your message..." multiline = {true}/>
        <MaterialIcons onPress={onSend} style = {styles.send} name = "send" size={24} color = "white" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "whitesmoke",
        padding: 5,
        alignItems: "center",
    },
    input: {
        fontSize: 18,
        flex:1,
        backgroundColor: "white",
        paddingHorizontal: 10,
        marginHorizontal: 10,

        borderRadius: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "lightgray",
    },
    send: {
        backgroundColor: "royalblue",
        padding: 7,
        borderRadius: 15,
        overflow: "hidden",
    
    },
});

export default InputBox;