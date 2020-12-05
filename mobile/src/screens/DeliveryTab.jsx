import React from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { n } from '../utils/normalize'

export default function DeliveryScreen() {
    const navigation = useNavigation()

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View style={styles.services}>
                <Text>Delivery</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    services: {
        backgroundColor: '#fff',
        borderTopLeftRadius: n(30),
        borderTopRightRadius: n(30),
    },
})
