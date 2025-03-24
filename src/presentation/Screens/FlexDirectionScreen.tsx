import React from 'react'
import { View, StyleSheet } from 'react-native'

const FlexDirectionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    box: {
        width: 100,
        height: 100,

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

export default FlexDirectionScreen
