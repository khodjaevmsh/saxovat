import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as Icon from 'react-native-feather'
import { colors } from './utils/colors'
import { GlobalContext } from './contexts/GlobalContext'
import TabBarIcon from './components/common/TabBarIcon'
import MainTab from './screens/MainTab'
import Money from './screens/Money'
import RecipientTab from './screens/RecipientTab'
import Recipient from './screens/Recipient'
import DeliveryTab from './screens/DeliveryTab'
import ToWhomDetail from './screens/ToWhomDetail'
import Food from './screens/Food'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function Navigation() {
    const { token, headerOptions } = useContext(GlobalContext)
    const initial = 'TabScreen'

    return (
        <NavigationContainer theme={{ colors: { background: 'white' } }}>
            <Stack.Navigator initialRouteName={initial} screenOptions={{ headerStyle: styles.stackHeader }}>
                <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ToWhomDetail" component={ToWhomDetail} options={{
                    headerShown: true,
                    title: null,
                    headerStyle: { shadowColor: 'transparent' },
                    headerBackTitle: null,
                    headerTruncatedBackTitle: null,
                    cardStyle: { backgroundColor: colors.WHITE },
                    headerBackImage: () => <Icon.ChevronLeft color={colors.WHITER} width={70} height={40} />,
                }} />
                <Stack.Screen name="Money" component={Money} options={{
                    title: '',
                    headerBackImage: () => (<Icon.ChevronLeft color={colors.gray} />),
                    headerBackTitle: 'Orqaga',
                }} />
                <Stack.Screen name="Recipient" component={Recipient} options={{
                    title: '',
                    headerBackImage: () => (<Icon.ChevronLeft color={colors.gray} />),
                    headerBackTitle: 'Orqaga',
                }} />
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
            <Tab.Screen name="RecipientTab" component={RecipientTab} options={{
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={Icon.UserPlus} />,
            }} />
            <Tab.Screen name="DeliveryTab" component={DeliveryTab} options={{
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={Icon.Truck} />,
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabHeader: {
        backgroundColor: colors.blue,
        width: '100%',
        height: 70,
        paddingHorizontal: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    stackHeader: {
        backgroundColor: 'white',
        elevation: 0,
        shadowOpacity: 0,
    },
})
