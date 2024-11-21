import { Text, View, StyleSheet } from "react-native";

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            {/*<Text style={styles.title}>Box Object Model Screen</Text>*/}
            <View style={styles.purpleBox}>
                <Text  style={{color:'white'}}>Hola Edmundo</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    title: {
        fontSize: 20,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderWidth: 10,
    },
    purpleBox: {
        height: 30,
        backgroundColor: 'purple',
        marginHorizontal: 20,
        marginVertical: 50,
        padding:5
    }
})  