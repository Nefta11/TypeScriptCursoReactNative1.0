import React from 'react'
import { View, StyleSheet } from 'react-native'

const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1} />
            <View style={styles.box2} />
            <View style={styles.box3} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
    box1: {
        backgroundColor: '#5856d6',
        flex: 2, // 1+2+3=6  1/6
    },
    box2: {
        backgroundColor: '#f0a23b',
        flex: 3, // 1+2+3=6  2/6
    },
    box3: {
        backgroundColor: '#28c4d9',
        flex: 4, // 1+2+3=6  3/6
    },
})

export default FlexScreen
