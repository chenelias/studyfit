import React from 'react'
import { Text, View } from 'native-base'
import { StyleSheet } from 'react-native'
function HistoryScreen() {
    return (
        <View style={centerstyle.container}>
            <Text fontSize="40" fontWeight="bold">History</Text>
        </View>
    )
}
//style
const centerstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default HistoryScreen