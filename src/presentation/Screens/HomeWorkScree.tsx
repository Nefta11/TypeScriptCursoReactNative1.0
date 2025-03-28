import React from 'react'
import { View, StyleSheet } from 'react-native'

const HomeWorkScree = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.purpleBox]} />
            <View style={[styles.box, styles.orangeBox]} />
            <View style={[styles.box, styles.blueBox]} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // TODO: Tarea

    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
       // alignSelf: 'flex-end',        
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        //flex: 1,        
        top: 50,
    },
    blueBox: {
        backgroundColor: '#28C4D9',
        //width:"100%",
        //alignSelf: 'center',
        
    },
})

export default HomeWorkScree

