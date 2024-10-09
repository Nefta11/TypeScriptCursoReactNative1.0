import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HelloWorldScreen() {
  return (
    <View style={styles.container}>
      <Text>HelloWorldScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"red"
}

})