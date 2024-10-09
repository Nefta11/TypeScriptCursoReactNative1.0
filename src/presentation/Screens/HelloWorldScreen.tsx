import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    name?: string;
}

export default function HelloWorldScreen({name = "World"}) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} ellipsizeMode="middle" style={styles.title}>Hello, {name} </Text>
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