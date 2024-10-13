import { StyleSheet, Text, View, Pressable, Platform } from 'react-native'
import React, { useState } from 'react'

interface Props {
    label: string,
    onPress?: () => void;
    onLongPress?: () => void;
}

export default function PrimaryButton({label, onLongPress, onPress}:Props) {
    return (
        <View>
            <Pressable
                onPress={() => onPress && onPress()}
                onLongPress={() => onLongPress && onLongPress()}
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed
                ]}
            >
                <Text style={{
                    color: Platform.OS === "android" ? "white" : "#4746AB"
                }}>{label}</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: Platform.OS === "android" ? "#5856D6" : "white",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonPressed: {
        backgroundColor: Platform.OS === "android" ? "#0a0202" : "white"
    }
})