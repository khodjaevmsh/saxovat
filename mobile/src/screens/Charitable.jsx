import React from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native'
import * as Icon from 'react-native-feather'
import { colors } from '../utils/colors'
import { n } from '../utils/normalize'
import XayriyaFondlari from '../data/XayriyaFondlari.json'
import foundations from '../data/foundationsImage'

export default function Charitable() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View style={styles.wrapper}>
                <Text style={styles.mainTitle}>Xayriya Fondlari</Text>
                <Text style={styles.mainSubtitle}>qabul qiluvchini tanlang</Text>

                {XayriyaFondlari.map((item) => (
                    <TouchableOpacity key={item.id} opacity={0.7} style={{ flexDirection: 'row', flex: 1 }}>
                        <Image style={styles.image} source={foundations[item.id].image} />
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>{item.G2}</Text>
                            <Icon.ChevronRight color="black" width={n(60)} height={n(30)} />
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingHorizontal: n(28),
        paddingTop: n(12),
    },
    mainTitle: {
        fontSize: n(38),
        fontWeight: '700',
        color: colors.swampy,
    },
    cardTitle: {
        fontSize: n(15),
        paddingHorizontal: n(25),
        width: '70%',
    },
    cardSubTitle: {
        fontSize: n(15),
        paddingHorizontal: n(25),
    },
    mainSubtitle: {
        fontSize: n(24),
        fontWeight: '400',
        color: colors.gray,
        marginBottom: n(30),
    },
    card: {
        width: '80%',
        height: n(70),
        backgroundColor: colors.grey,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: n(15),
        marginBottom: n(15),
    },
    image: {
        marginTop: n(12),
        marginRight: n(13),
        width: n(50),
        height: n(50),
    },
})
