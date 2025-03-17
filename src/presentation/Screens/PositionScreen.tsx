import { View, Text, StyleSheet } from 'react-native'

const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <Text
            style={ styles.purpleBox }
            />
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#28c4d9',
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: '#5856d6',
        borderWidth: 10,
        borderColor: 'white',
    }
})

export default PositionScreen
