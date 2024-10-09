import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HelloWorldScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HelloWorldScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
},
title:{
    fontSize:45,
    textAlign:"center",
    color:"black",
    padding:20
}

})