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
import Auth from './screens/Auth'
import Confirm from './screens/Confirm'
import Register from './screens/Register'
import PaymentType from './screens/PaymentType'
import { n } from './utils/normalize'
import Product from './screens/Product'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function Navigation() {
    const { token, headerOptions } = useContext(GlobalContext)
    const initial = token ? 'TabScreen' : 'Auth'

    return (
        <NavigationContainer theme={{ colors: { background: 'white' } }}>
            <Stack.Navigator initialRouteName={initial} screenOptions={{ headerStyle: styles.stackHeader }}>
                <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
                <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Confirm" component={Confirm} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="Food" component={Food} options={{
                    title: '',
                    headerBackImage: () => (<Icon.ChevronLeft color={colors.gray} />),
                    headerBackTitle: 'Orqaga',
                }} />
                <Stack.Screen name="Product" component={Product} options={{
                    title: '',
                    headerBackImage: () => (<Icon.ChevronLeft color={colors.gray} />),
                    headerBackTitle: 'Orqaga',
                }} />

                <Stack.Screen name="ToWhomDetail" component={ToWhomDetail} options={{
                    headerShown: true,
                    title: null,
                    headerBackTitle: null,
                    headerTruncatedBackTitle: null,
                    headerBackImage: () => <Icon.ChevronLeft color={colors.WHITER} width={n(70)} height={n(40)} />,
                }} />

                <Stack.Screen name="Money" component={Money} options={{
                    headerShown: true,
                    title: null,
                    headerBackTitle: null,
                    headerTruncatedBackTitle: null,
                    headerBackImage: () => <Icon.ChevronLeft color={colors.WHITER} width={n(70)} height={n(40)} />,
                }} />

                <Stack.Screen name="Recipient" component={Recipient} options={{
                    headerShown: true,
                    title: null,
                    headerBackTitle: null,
                    headerTruncatedBackTitle: null,
                    headerBackImage: () => <Icon.ChevronLeft color={colors.WHITER} width={n(70)} height={n(40)} />,
                }} />

                <Stack.Screen name="PaymentType" component={PaymentType} options={{
                    headerShown: true,
                    title: null,
                    headerBackTitle: null,
                    headerTruncatedBackTitle: null,
                    headerBackImage: () => <Icon.ChevronLeft color={colors.WHITER} width={n(70)} height={n(40)} />,
                }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

function TabScreen() {
    return (
        <Tab.Navigator tabBarOptions={{ style: styles.tabHeader, showLabel: false, keyboardHidesTabBar: true }}>
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
        height: '12%',
        paddingHorizontal: n(35),
        borderTopLeftRadius: n(30),
        borderTopRightRadius: n(30),
    },
    stackHeader: {
        backgroundColor: 'white',
        elevation: 0,
        shadowOpacity: 0,
    },
})
