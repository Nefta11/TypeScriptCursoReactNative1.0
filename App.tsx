import { SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import HelloWorldScreen from './src/presentation/Screens/HelloWorldScreen'
import CounterScreen from './src/presentation/Screens/CounterScreen'
import { PaperProvider } from 'react-native-paper'
import CounterM3Screen from './src/presentation/Screens/CounterM3Screen'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { BoxObjectModelScreen } from './src/presentation/Screens/BoxObjectModelScreen'
import DimensionScreen from './src/presentation/Screens/DimensionScreen'
import PositionScreen from './src/presentation/Screens/PositionScreen'
import FlexScreen from './src/presentation/Screens/FlexScreen'

export default function App() {
  return (
    <PaperProvider
    settings={{
      icon: props => <IonIcon {...props} />
    }}
    >
    <SafeAreaView style={{flex:1}}>
     {/* <HelloWorldScreen name='Neftali Vergara'/> */}
    {/* <CounterScreen/>*/}
    {/*<CounterM3Screen/>*/}
    {/*<BoxObjectModelScreen/>*/}
    {/*<DimensionScreen/>*/}
    {/*<PositionScreen/>*/}
    <FlexScreen/>
    </SafeAreaView>
    </PaperProvider> 
  )
}

const styles = StyleSheet.create({

  
})
