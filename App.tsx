import { SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import HelloWorldScreen from './src/presentation/Screens/HelloWorldScreen'
import CounterScreen from './src/presentation/Screens/CounterScreen'
import { PaperProvider } from 'react-native-paper'
import CounterM3Screen from './src/presentation/Screens/CounterM3Screen'

export default function App() {
  return (
    <PaperProvider>
    <SafeAreaView style={{flex:1}}>
     {/* <HelloWorldScreen name='Neftali Vergara'/> */}
    {/* <CounterScreen/>*/}
    <CounterM3Screen/>
    </SafeAreaView>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({

  
})
