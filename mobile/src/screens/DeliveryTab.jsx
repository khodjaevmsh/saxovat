import React from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar, Image } from 'react-native'
import { n } from '../utils/normalize'
import { colors } from '../utils/colors'
import delivery from '../assets/Free.png'

export default function DeliveryScreen() {
    const cards = [{ text: 'Mehribonlik uylari' }, { text: 'Kiyim-kechak' }, { text: 'Dori mahsulotlari' }]

    return (
        <ScrollView style={{ marginHorizontal: 30, marginTop: 20 }} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View style={styles.services}>
                <Text style={styles.title}>Yetqazib berish</Text>
                <Text style={{ color: '#96A7AF', marginBottom: 20 }}>kerak bo’lgan xayriya mahsulotlari</Text>

                <View style={{ display: 'flex' }}>
                    {cards.map((item) => (
                        <View style={{ ...styles.box, backgroundColor: '#F0F0F0' }}>
                            <View>
                                <Text style={{ fontSize: 18, marginBottom: 8, fontWeight: 'bold', color: 'black' }}>
                                    {item.text}
                                </Text>

                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text style={{
                                        width: 15,
                                        height: 10,
                                        marginTop: 5,
                                        marginRight: 5,
                                        borderRadius: 6,
                                        backgroundColor: '#FFC542',
                                    }}>
                                        .
                                    </Text>

                                    <Text style={{ ...styles.iconHome, color: 'black' }}>
                                        Sh. Rustaveli 15 uydan
                                    </Text>
                                </View>

                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text style={{
                                        width: 15,
                                        height: 10,
                                        marginTop: 5,
                                        marginRight: 5,
                                        borderRadius: 6,
                                        backgroundColor: '#FF575F',
                                    }}>
                                        .
                                    </Text>

                                    <Text style={{ ...styles.iconHome, color: 'black' }}>
                                        Mehribonlik uyi №15ga
                                    </Text>
                                </View>
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <View>
                                    <Image source={delivery} />
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
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
    box: {
        flexDirection: 'row',
        width: '100%',
        padding: 30,
        borderRadius: 25,
        justifyContent: 'flex-start',
        marginBottom: 15,
    },
    container: {
        marginHorizontal: 20,
    },
    text: {
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        fontSize: n(38),
        fontWeight: 'bold',
        color: colors.dark_swampy,
    },
})
