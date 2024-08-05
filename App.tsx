import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { LoginScreen } from './src/screens/login';
import imageBg from './src/imgs/bg.png'
import { Input, Button} from '@rneui/base';

export default function App() {
  return (
    <ImageBackground source={imageBg} style={styles.imagemFundo}>
      <View style={styles.container}>

        <Text style={styles.logo}>APP</Text>        

        {/* Campos de Input */}
        <Input placeholder='Digite seu email'
        keyboardType={'email-address'} leftIcon={{name: 'person', color: 'white'}}
        inputStyle={{color: 'black'}} labelStyle={{color: 'white'}}
        inputContainerStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          borderRadius: 10,
        }}
        />

        <Input placeholder='Digite sua senha' secureTextEntry={true}
        leftIcon={{name: 'lock', color: 'white'}} inputStyle={{color: 'white'}}
        inputContainerStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          borderRadius: 10,          
        }}
        />

        <Button title="LOGAR" containerStyle={{borderRadius: 30}} raised={true}/>

        <Text style={styles.botaoLogin}>
          Não possui conta? Clique aqui para cadastra-se
        </Text>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create ({
  logo: { fontSize: 30, color: 'white', textAlign: 'center' },
  imagemFundo: { height: '100%', width: '100%' },
  container: { flex: 1, justifyContent: 'center', padding: 10, alignItems: 'stretch' },
  containerInput: { backgroundColor: 'rgba(255, 255, 255, 0.3', borderRadius: 30 },
  botaoLogin: {color: 'white', fontSize: 20, textDecorationLine: 'underline', margin: 30, textAlign: 'center'}
});
