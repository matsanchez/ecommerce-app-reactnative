import Input from "../components/Input/Input";
import { TouchableOpacity, StyleSheet, Text, View, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import { colors } from '../global/colors';
import { useLogInMutation } from '../services/authService';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';
import { logInSchema } from '../validations/logInSchema';
import { LinearGradient } from 'expo-linear-gradient';


const LoginScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const [triggerLogIn, result] = useLogInMutation();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      // Limpiar errores al intentar iniciar sesión
      setLoginError('');
      setFormErrors({
        email: '',
        password: '',
      });

      // Validar los datos con el esquema de inicio de sesión
      await logInSchema.validate({ email, password }, { abortEarly: false }); //? Comentar para hardcodear user y pass

      // Iniciar sesión
      setIsLoading(true);
      const response = await triggerLogIn({ email, password }); //? Comentar para hardcodear user y pass
      // const response = await triggerLogIn({ email: 'test@coder.com', password: '123456' }); //? Descomentar para hardcodear user y pass

      // Verificar si el inicio de sesión fue sin éxito
      if (response.error) {
        setLoginError('Unregistered user or Incorrect password');
      } else {
        // Limpiar el estado de error si el inicio de sesión fue exitoso
        setLoginError('');
        dispatch(setUser(response.data));
      }
    } catch (error) {
      // Manejar errores de validación Yup
      if (error.name === 'ValidationError') {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        // Asignar mensajes de error a los campos correspondientes
        if (validationErrors.email) {
          setFormErrors((prevErrors) => ({ ...prevErrors, email: validationErrors.email }));
        } else if (validationErrors.password) {
          setFormErrors((prevErrors) => ({ ...prevErrors, password: validationErrors.password }));
        }
      } else {
        console.error('Error during login:', error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data));
    }
  }, [result]);

  return (
    <LinearGradient
      colors={[colors.secondary, colors.primary,]}
      style={styles.background}
      end={{ x: 0.5, y: 0.2 }}

    >
      {isLoading ? <ActivityIndicator style={{ flex: 1 }} size="large" color={colors.paleGoldenRod} /> :

        <KeyboardAvoidingView style={styles.container} behavior='height'>
          <Input
            label='Email:'
            onChange={setEmail}
            error={formErrors.email}
          />
          <Input
            label='Password:'
            onChange={setPassword}
            error={formErrors.password}
            isSecureEntry={true}
          />
          {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}

          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>LogIn</Text>
          </TouchableOpacity>
          <View style={styles.altContainer}>
            <Text style={styles.subtitle}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => { navigation.navigate('Signup') }}>
              <Text style={styles.subtitleLink}>Create One</Text>
            </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>
      }
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 10,
  },
  button: {
    padding: 10,
    backgroundColor: colors.text_color_secondary,
    borderRadius: 10,
    margin: 5,
  },
  buttonText: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  altContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  subtitle: {
    color: colors.secondary,
    fontSize: 16,
  },
  subtitleLink: {
    color: colors.secondary,
    fontSize: 14,
    textDecorationLine: 'underline',
    textTransform: 'uppercase',
  },
  errorText: {
    color: colors.text_color_error,
    fontSize: 14,
    marginTop: 10,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});