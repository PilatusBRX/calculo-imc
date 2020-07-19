import React, { useState } from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const ModalComponent = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.modal}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setVisible(true);
        }}
      >
        <Icon name='info' size={25} color='#2f3542' style={styles.icon} />
      </TouchableOpacity>

      <Modal
        isVisible={visible}
        // swipeDirection={['up', 'down', 'right', 'left']}
        onSwipeComplete={() => setVisible(false)}
      >
        <View style={styles.modalBox}>
          <View style={styles.modalText}>
            <Text style={styles.text}>
              IMC menor que 18,5: <Text style={styles.red}>MAGREZA</Text>
            </Text>
            <Text style={styles.text}>
              IMC entre 18,5 e 24,9: <Text style={styles.green}>NORMAL</Text>
            </Text>
            <Text style={styles.text}>
              IMC entre 25 e 29,9: <Text style={styles.grey}>SOBREPESO</Text>
            </Text>
            <Text style={styles.text}>
              IMC entre 30 e 39,9: <Text style={styles.yellow}>OBESIDADE</Text>
            </Text>
            <Text style={styles.text}>
              IMC maior que 40: <Text style={styles.red}> OBESIDADE GRAVE</Text>
            </Text>
          </View>
          <Button
            color='#363636'
            title='Voltar para Início'
            onPress={() => {
              setVisible(false);
            }}
          />
          <Icon name='info' size={25} color='#2f3542' style={styles.icon} />
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  modal: {
    marginTop: 105,
  },

  modalBox: {
    backgroundColor: 'white',
    height: 400,
    padding: 20,
  },
  modalText: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 18,
    marginBottom: 18,
    color: '#343636',
  },
  button: {
    alignItems: 'center',
  },

  icon: {
    color: '#fff',
  },
  red: {
    color: '#d81b40',
    fontWeight: 'bold',
  },

  green: {
    color: '#1de9b6',
    fontWeight: 'bold',
  },
  grey: {
    color: '#343636',
    fontWeight: 'bold',
  },
  yellow: {
    color: 'orange',
    fontWeight: 'bold',
  },
});

export default ModalComponent;
