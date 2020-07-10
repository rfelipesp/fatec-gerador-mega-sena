import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';


export default function App() {

  const [numbers, setNumbers] = useState([0,0,0,0,0,0]);
  const [control, setControl] = useState([]);

  const generateNumbers = () => {
    setNumbers(
      numbers.map(numbers => getNumber()).sort((a, b) => a > b)
    );
    setControl([]);
  }

  const getNumber = () => {
    var number = (Math.floor(Math.random() * 59) + 1);
    if(control.includes(number)){
      return getNumber();
    }
    control.push
    return number;
  }

  return (
    <View style={styles.telaPrincipalView}>
        <FlatList 
          data={numbers}
          renderItem={
            number => (
              <View style={styles.itemNaLista}>
                <Text>{number.item}</Text>
              </View>
            )
          }
        />
        <View style={styles.button}>
        <Button
          title="Gerar Numeros"
          onPress={generateNumbers}
          />
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
   padding: 50,
  },
  itemNaLista: {
    padding: 16,
    backgroundColor: '#DDD',
    borderColor: '#EEE',
    borderWidth: 1,
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 12,
    fontSize: 16,
    alignItems: 'center'
    
  },
  button: {
    backgroundColor: '#1565C0',
  }
});
