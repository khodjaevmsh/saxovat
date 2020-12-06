import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import { RedCard, YellowCard, GreenCard } from './Svgs'
import { n } from '../utils/normalize'

export default function MainCards() {
    const navigation = useNavigation()

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.block} activeOpacity={1} onPress={() => navigation.navigate('Money')}>
                <View style={styles.textWrapper}>
                    <Text style={styles.blockText}>Mablag’</Text>
                    <Text style={styles.blockText}>o’tkazish</Text>
                </View>

                <RedCard width="100%" />

                <View style={styles.icon}>
                    <Icon.CreditCard width={n(100)} height={n(80)} color="white" />
                </View>
            </TouchableOpacity>

            <View style={styles.flex}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Food')}
                    style={{ width: '46%', marginRight: '4%' }}
                    activeOpacity={1}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.blockText}>Oziq</Text>
                        <Text style={styles.blockText}>ovqat</Text>
                    </View>

                    <YellowCard width="100%" />

                    <View style={styles.iconSecond}>
                        <Icon.Box color="white" width={n(72)} height={n(72)} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Product')}
                    style={{ width: '46%', marginLeft: '4%' }}
                    activeOpacity={1}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.blockText}>Kerakli</Text>
                        <Text style={styles.blockText}>buyumlar</Text>
                    </View>

                    <GreenCard width="100%" />

                    <View style={styles.iconSecond}>
                        <Icon.Gift color="white" width={n(72)} height={n(72)} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        position: 'relative',
    },
    textWrapper: {
        position: 'absolute',
        top: '15%',
        left: '10%',
    },
    blockText: {
        color: 'white',
        zIndex: 2,
        fontSize: n(23),
        fontWeight: '600',
    },
    icon: {
        position: 'absolute',
        top: '40%',
        left: '60%',
    },
    iconSecond: {
        position: 'absolute',
        top: '50%',
        left: '40%',
    },
    flex: {
        marginTop: n(-25),
        width: '100%',
        flexDirection: 'row',
    },
})
