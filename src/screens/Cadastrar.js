import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import NavBar from '../components/NavBar'; 

const Cadastrar = () => {
  const [companhia, setCompanhia] = useState('Latam');
  const [aeroportoIda, setAeroportoIda] = useState('Londres');
  const [aeroportoVolta, setAeroportoVolta] = useState('Guarulhos');
  const [dataIda, setDataIda] = useState('2025-09-26');
  const [dataVolta, setDataVolta] = useState('2025-09-26');
  const [horaIda, setHoraIda] = useState('08:00');
  const [horaVolta, setHoraVolta] = useState('08:00');

  const cadastraVoo = () => {
    const voo = {
      companhia,
      aeroportoIda,
      aeroportoVolta,
      dataIda,
      dataVolta,
      horaIda,
      horaVolta,
    };

    Alert.alert('Sucesso!', 'Voo cadastrado com sucesso!');
    console.log(voo);

    axios
      .post('https://api-mpa-flightly-mn44.onrender.com/voo', voo)
      .then(() => console.log('Voo enviado ao servidor'))
      .catch((error) => console.error('Erro ao cadastrar voo:', error));
  };

  return (
    <>
      <NavBar />
      <View style={styles.bodyCadastro}>
        <View style={styles.containerCadastro}>
          <Text style={styles.titleCadastro}>Cadastre o seu Voo</Text>

          <Text style={styles.etiquetaInput}>Companhia Aérea</Text>
          <TextInput
            style={styles.input}
            value={companhia}
            onChangeText={setCompanhia}
          />

          <Text style={styles.etiquetaInput}>Aeroporto Ida</Text>
          <TextInput
            style={styles.input}
            value={aeroportoIda}
            onChangeText={setAeroportoIda}
          />

          <Text style={styles.etiquetaInput}>Aeroporto Volta</Text>
          <TextInput
            style={styles.input}
            value={aeroportoVolta}
            onChangeText={setAeroportoVolta}
          />

          <Text style={styles.etiquetaInput}>Data Ida</Text>
          <TextInput
            style={styles.input}
            value={dataIda}
            onChangeText={setDataIda}
            placeholder="YYYY-MM-DD"
          />

          <Text style={styles.etiquetaInput}>Data Volta</Text>
          <TextInput
            style={styles.input}
            value={dataVolta}
            onChangeText={setDataVolta}
            placeholder="YYYY-MM-DD"
          />

          <Text style={styles.etiquetaInput}>Horário Ida</Text>
          <TextInput
            style={styles.input}
            value={horaIda}
            onChangeText={setHoraIda}
          />

          <Text style={styles.etiquetaInput}>Horário Volta</Text>
          <TextInput
            style={styles.input}
            value={horaVolta}
            onChangeText={setHoraVolta}
          />

          <TouchableOpacity style={styles.button} onPress={cadastraVoo}>
            <Text style={styles.buttonText}>Cadastrar Voo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bodyCadastro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#ffffff',
  },
  containerCadastro: {
    width: '90%',
    padding: 20,
  },
  titleCadastro: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 25,
    textAlign: 'center',
  },
  etiquetaInput: {
    marginTop: 20,
    marginLeft: 12,
    fontSize: 16,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    color: '#FF6600',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6600',
    borderRadius: 25,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Cadastrar;
