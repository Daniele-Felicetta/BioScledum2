import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import Game from './components/Game'
export default function App() {
  return (
      <Game/>
  );
}