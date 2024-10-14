import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../theme/global.styles'


export default function CounterM3Screen() {

  const [count, setCount] = useState(10)

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>


    </View>
  )
}
