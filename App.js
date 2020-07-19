import React, { useState, Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
  Keyboard,
} from 'react-native';
import ModalComponent from './ModalComponent';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState('');
  const [cor, setCor] = useState('#fff');
  const [legenda, setLegenda] = useState('Indeterminado');

  const calcIMC = () => {
    const resultado = Math.ceil(peso / (altura * altura));
    setIMC(resultado);

    setPeso('');
    setAltura('');
    Keyboard.dismiss('');

    if (resultado < 18.5) {
      setLegenda('Magreza');
      setCor('#d81b40');
    } else if ((resultado >= 18.5) & (resultado < 25)) {
      setLegenda('Normal');
      setCor('#1de9b6');
    } else if (resultado >= 25 && resultado < 30) {
      setLegenda('Sobrepeso');
      setCor('#dcdde1');
    } else if (resultado >= 30 && resultado < 40) {
      setLegenda('Obesidade');
      setCor('#fbc531');
    } else if (resultado >= 40) {
      setLegenda('Obesidade Grave');
      setCor('#d81b68');
    }
  };

  return (
    <Fragment>
      <KeyboardAvoidingView
        behavior='padding'
        keyboardVerticalOffset={0}
        style={{ flex: 1 }}
        enabled={Platform.OS === 'ios'}
      >
        <StatusBar barStyle='light-content' />
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Meu IMC</Text>
            <Text style={styles.paragraph}>
              Saiba o seu índice de massa corporal
            </Text>
          </View>
          <View style={[styles.block]}>
            {imc > 0 && (
              <View style={[styles.block, { backgroundColor: cor }]}>
                <Text style={styles.resultado}>{imc}</Text>
                <Text style={styles.text}>{legenda}</Text>
              </View>
            )}
            <View>
              <TextInput
                placeholderTextColor='#334466'
                style={styles.input}
                placeholder='Digite sua altura...'
                value={altura}
                onChangeText={(valor) => setAltura(valor.replace(',', '.'))}
              />
              <TextInput
                placeholderTextColor='#334466'
                style={styles.input}
                placeholder='Digite seu peso...'
                value={peso}
                onChangeText={(valor) => setPeso(valor.replace(',', '.'))}
              />
              <View style={styles.viewButton}>
                <Button title='Calcular' onPress={calcIMC} color='#334466' />
              </View>
            </View>
          </View>
          <ModalComponent />
        </View>
      </KeyboardAvoidingView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8c7af9',
    padding: 10,
    flex: 1,
  },
  paragraph: {
    color: '#fff',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    //Platform:
    ...Platform.select({
      ios: {
        marginTop: 160,
        marginBottom: 100,
      },
      android: {
        marginTop: 80,
        marginBottom: 120,
      },
      default: {
        // other platforms, web for example
        marginTop: 30,
        marginBottom: 20,
      },
    }),
  },

  text: {
    color: '#334466',
    fontSize: 24,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  resultado: {
    color: '#334466',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 5,
  },

  block: {
    height: 100,
    // backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 10,
    borderRadius: 7,
  },

  input: {
    height: 60,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingLeft: 10,
    marginBottom: 6,
    paddingLeft: 20,
  },

  viewButton: {
    height: 60,
    borderRadius: 5,
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    //Platform:
    ...Platform.select({
      ios: {
        backgroundColor: '#fff',
      },
      android: {
        backgroundColor: 'none',
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'none',
      },
    }),
  },

  button: {
    height: 60,
    marginTop: 5,
    borderRadius: 3,
  },

  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 50,
  },
  modalClose: {
    marginTop: 200,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});

export default App;
