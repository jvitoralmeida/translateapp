/* eslint-disable global-require */
import React, { useState } from 'react';
import { Text, Image, Picker, Button, TextInput, View, Alert } from 'react-native';

import styles from './styles';
import languages from './data/languages';

export default function App() {
  const [para, setPara] = useState();
  const [word, setWord] = useState();
  const [response, setResponse] = useState();

  async function makeTranslate(text, language) {
    if (!text) {
      Alert.alert(
        'Alerta',
        'Voce precisa digitar um texto antes',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    } else if (!language) {
      Alert.alert(
        'Alerta',
        'Voce precisa selecionar a linguagem',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    } else {
      await fetch('https://heroku-boot-jv.herokuapp.com/translate', {
        method: 'POST',
        body: JSON.stringify({
          text,
          language,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setResponse(json.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.image} />
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          marginTop: 50,
          marginLeft: 25,
          alignSelf: 'flex-start',
        }}
      >
        Traduzir para:
      </Text>
      <View style={{ borderColor: '#FFF', borderWidth: 2, borderRadius: 4, marginTop: 10 }}>
        <Picker
          selectedValue={para}
          onValueChange={(itemValue) => setPara(itemValue)}
          style={styles.picker}
        >
          {languages.map((language) => (
            <Picker.Item label={language.country} value={language.aliases} key={language.aliases} />
          ))}
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setWord(text)}
        placeholder="Digite seu texto aqui"
      />
      <View style={{ width: 348, marginTop: 30 }}>
        <Button
          onPress={() => makeTranslate(word, para)}
          title="Traduzir meu texto"
          color="#4085f9"
        />
      </View>
      {!response ? null : <TextInput style={styles.input} value={response} />}
      <Image
        source={require('./assets/react_black.png')}
        style={{ width: 150, height: 150, marginTop: 90 }}
      />
    </View>
  );
}
