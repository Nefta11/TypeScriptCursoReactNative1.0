import React from 'react'
import { View, StyleSheet } from 'react-native'

const FlexDirectionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />

            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />

            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 30,
    },
    box: {
        //flex: 1,
        width: 100,
        height: 100,

    },
    box1: {
        backgroundColor: '#5856d6',
        //top: -100,
    },
    box2: {
        backgroundColor: '#f0a23b',
      // alignSelf: 'flex-end',
    },
    box3: {
        backgroundColor: '#28c4d9',
    },
    box4:{
        backgroundColor:"#5856d6",
    }
})

export default FlexDirectionScreen
