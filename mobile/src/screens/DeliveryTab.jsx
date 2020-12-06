import React from 'react'
import { StyleSheet, Image, TouchableOpacity, Text, View, ScrollView, StatusBar } from 'react-native'
import { n } from '../utils/normalize'
import { colors } from '../utils/colors'
import Container from '../components/common/Container'
import deliveryImage from '../assets/delivery.png'

export default function DeliveryScreen() {
    const cards = [{ text: 'Mehribonlik uylari' }, { text: 'Kiyim-kechak' }, { text: 'Dori mahsulotlari' }]

    return (
        <Container style={{ paddingTop: n(32) }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                <View>
                    <Text style={styles.title}>Yetqazib berish</Text>
                    <Text style={styles.subTitle}>kerak bo’lgan xayriya mahsulotlari</Text>

                    <View style={{ display: 'flex' }}>
                        {cards.map((item, index) => (
                            <View key={index} style={{ ...styles.box, backgroundColor: '#F0F0F0' }}>
                                <View>
                                    <Text style={{
                                        fontSize: n(18),
                                        marginBottom: n(8),
                                        fontWeight: 'bold',
                                        color: 'black',
                                    }}>
                                        {item.text}
                                    </Text>

                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Text style={{
                                            width: n(15),
                                            height: n(10),
                                            marginTop: n(5),
                                            marginRight: n(5),
                                            borderRadius: n(6),
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
                                            width: n(15),
                                            height: n(10),
                                            marginTop: n(5),
                                            marginRight: n(5),
                                            borderRadius: n(6),
                                            backgroundColor: '#FF575F',
                                        }}>
                                            .
                                        </Text>

                                        <Text style={{ ...styles.iconHome, color: 'black' }}>
                                            Mehribonlik uyi №15ga
                                        </Text>
                                    </View>
                                </View>

                                <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <View style={styles.status}>
                                        <Image source={deliveryImage} />
                                        <Text style={{ color: 'white' }}>Yektazaman</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        width: '100%',
        padding: n(30),
        borderRadius: n(25),
        justifyContent: 'flex-start',
        marginBottom: n(15),
    },
    container: {
        marginHorizontal: n(20),
    },
    text: {
        paddingHorizontal: n(20),
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        fontSize: n(38),
        fontWeight: '700',
        color: colors.dark_swampy,
    },
    subTitle: {
        fontSize: n(22),
        fontWeight: '400',
        marginBottom: n(20),
        color: colors.light_gray,
    },
    status: {
        flex: 1,
        backgroundColor: '#3ED598',
        justifyContent: 'center',
        alignItems: 'center',
        height: n(91),
        width: n(93),
        borderRadius: n(12),
    },
})
