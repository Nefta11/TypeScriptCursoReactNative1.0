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
    },
    box2: {
        backgroundColor: '#f0a23b',
    },
    box3: {
        backgroundColor: '#28c4d9',
    },
})

export default FlexScreen
