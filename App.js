import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Rotas } from './src/routes';

export default function App() {
  return (
    <>
    <Rotas/>
    <StatusBar style='light'/>
    </>
  );
}


