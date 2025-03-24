import React from 'react'
import { View, StyleSheet } from 'react-native'

const HomeWorkScree = () => {
    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B'
        // TODO: Tarea

    },
    box: {
        width: 100,
        height: 100,
    },
    purpleBox: {
        backgroundColor: '#5856D6',
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
    },
    greenBox: {
        backgroundColor: '#28C4D9',
    }
})

export default HomeWorkScree

