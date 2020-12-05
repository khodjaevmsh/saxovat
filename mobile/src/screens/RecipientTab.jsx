import React from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function RecipientScreen() {
    const navigation = useNavigation()

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View style={styles.services}>
                <Text>Recipient</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    services: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
})