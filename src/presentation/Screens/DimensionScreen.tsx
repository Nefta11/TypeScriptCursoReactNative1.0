import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const DimensionScreen = () => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.purpleBox} />
            </View>
            <Text> w:{width}, h:{height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        backgroundColor: 'red'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        height: "50%",
        width: "50%"
    }
})

export default DimensionScreen