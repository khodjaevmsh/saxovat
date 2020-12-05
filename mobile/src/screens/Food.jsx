import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import Container from '../components/common/Container'
import ButtonLikeInput from '../components/common/ButtonLikeInput'
import Button from '../components/common/Button'
import Radio from '../components/common/Radio'
import TextArea from '../components/common/TextArea'

export default function Food() {
    const navigation = useNavigation()

    function onSubmit() {
        console.log('onSubmit Money')
    }

    const delivery = [
        { value: true, name: 'O\'zim' },
        { value: false, name: 'Yetqazib berish xizmati' },
    ]

    return (
        <Container style={{ flex: 1 }}>
            <ScrollView showsHorizontalScrollIndicator>
                <Text style={styles.title}>Oziq ovqat</Text>
                <Text style={styles.subTitle}>oziq-ovqat mahsulotlarini yuborish</Text>

                <Formik onSubmit={onSubmit} initialValues={{ delivery: '', amount: '' }}>
                    {({ handleSubmit }) => (
                        <View>
                            <ButtonLikeInput
                                label="Kimga"
                                title="Mehribonlik uyi №15"
                                styleText={{ color: 'gray' }}
                                onPress={() => navigation.navigate('Recipient')} />

                            <Text style={{
                                fontSize: 20,
                                fontWeight: '600',
                                marginBottom: 10,
                                letterSpacing: 0.5,
                            }}>
                                Kim yetqazib beradi?
                            </Text>

                            <View style={styles.radio}>
                                <Radio name="delivery" items={delivery} />
                            </View>

                            <TextArea
                                multiline
                                label="Mahsulot haqida"
                                name="description"
                                keyboard="default"
                                placeholder="Введите текст"
                                maxLength={255} />

                            <Button onPress={handleSubmit} title="Yuborish" />
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 42,
        fontWeight: 'bold',
    },
    radio: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 24,
        fontWeight: '400',
        marginBottom: 20,
    },
})
