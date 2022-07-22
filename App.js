import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';
import { global } from "./css/Styles.js";
import Header from "./components/Header";
import Balance from './components/Balance/index.js';
import Options from './components/Options/index.js';
import TabNavigator from './components/TabNavigator/index.js';

export default function App() {
  return (
   
    <View style = {global.container}>

    

  <ScrollView horizontal = {false}>

      <Header/>
      <Balance/>
      <Options/>
      <TabNavigator/>
  </ScrollView>
  
      <StatusBar style='auto'/>
    </View>
  );
}