import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function CounterScreen() {

    const[count, setCount] = useState (10)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>

      <Pressable
      onPress={ () => setCount( count + 1) }
      onLongPress={() => setCount(0)}
      >
      <Text>Incrementar</Text>
    </Pressable>

    <Pressable
      onPress={ () => setCount( count - 1) }>
      <Text>Desminuir</Text>
    </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:80,
        color:"black",
        fontWeight:"300"
    },
    button:{
      backgroundColor:"#5856D6",
      paddingHorizontal:20,
      paddingVertical:10
    }

})