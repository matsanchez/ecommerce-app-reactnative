import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { colors } from '../../global/colors';

const Input = ({ label, onChange, error = '', isSecureEntry = false }) => {
  const [input, setInput] = useState('');

  const onHandleChangeText = (text) => {
    setInput(text);
    onChange(text);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onHandleChangeText}
        secureTextEntry={isSecureEntry}
        value={input}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  inputContainer: {
    width: '70%',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.input,
    width: '100%',
    color: colors.text_color,
  },
  label: {
    color: colors.textLight,
    marginBottom: 5,
    textAlign: 'left',
    fontWeight:"bold"
  },
  error: {
    fontSize: 14,
    color: colors.text_color_error,
    textAlign: 'right',
    paddingRight: 8,
  }
})