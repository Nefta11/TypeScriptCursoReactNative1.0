import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../theme/global.styles'
import { FAB } from 'react-native-paper'
import Icon from "react-native-vector-icons/Ionicons"

export default function CounterM3Screen() {

  const [count, setCount] = useState(10)

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <Text>Holaa</Text>

    <Icon name="accessibility-outline" size={25} />

      <FAB
      label='+1'
      onPress={ () => setCount(count +1)}
      onLongPress={() => setCount (0)}
      style={globalStyles.fab}
      />
    </View>
)
}
