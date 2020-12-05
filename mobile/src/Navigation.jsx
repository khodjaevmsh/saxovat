import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as Icon from 'react-native-feather'

import { GlobalContext } from './contexts/GlobalContext'
import TabBarIcon from './components/common/TabBarIcon'
import MainTab from './screens/MainTab'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function Navigation() {
    const { token, headerOptions } = useContext(GlobalContext)
    const initial = 'TabScreen'

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initial} screenOptions={{ headerStyle: styles.stackHeader }}>
                <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: true }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function TabScreen() {
    return (
        <Tab.Navigator tabBarOptions={{ showLabel: false, style: styles.tabHeader, activeTintColor: '#e91e63' }}>
            <Tab.Screen name="MainTab" component={MainTab} options={{
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={Icon.Home} />,
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabHeader: {
        height: '13%',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'column',
        alignSelf: 'center',
        borderTopWidth: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#223263',
    },
    stackHeader: {
        backgroundColor: '#f2f2f2',
        elevation: 0,
        shadowOpacity: 0,
    },
})
