import { SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import HelloWorldScreen from './src/presentation/Screens/HelloWorldScreen'

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <HelloWorldScreen name='Neftali Vergara'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
})