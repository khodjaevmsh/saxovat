import React, { useContext } from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import { useTabBarHeader } from '../hooks/helpers'
import { GlobalContext } from '../contexts/GlobalContext'
import { COLORS } from '../colors'

export default function MainScreen() {
    const { user } = useContext(GlobalContext)
    const navigation = useNavigation()

    useTabBarHeader({
        title: null,
        headerLeft: () => (
            <Text style={styles.headerLeft}>Привет, <Text style={styles.firstName}>{user.firstName}</Text></Text>
        ),
        headerRight: () => (
            <TouchableOpacity>
                <Icon.Bell style={styles.headerRight} color={COLORS.MAIN} />
            </TouchableOpacity>
        ),
        cardStyle: { backgroundColor: COLORS.WHITE },
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor="#f2f2f2" barStyle="dark-content" />

            <View style={styles.services}>
                <Text>asdasd</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerLeft: {
        marginLeft: 15,
        color: '#223263',
        fontSize: 21,
        fontWeight: 'bold',
    },
    firstName: {
        fontWeight: 'normal',
    },
    headerRight: {
        marginRight: 15,
    },
    services: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    notificationsCount: {
        backgroundColor: 'red',
        height: 12,
        width: 12,
        borderRadius: 100,
        position: 'absolute',
        left: 14,
        bottom: 15,
    },
})
