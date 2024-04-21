import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/header/header';
import { Contact } from './src/components/contact/contact';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-[#F6F7FB] antialiased">
      <Header />
      <Contact />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

