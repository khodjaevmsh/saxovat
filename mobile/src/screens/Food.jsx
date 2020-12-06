import React from 'react'
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import Container from '../components/common/Container'
import ButtonLikeInput from '../components/common/ButtonLikeInput'
import Button from '../components/common/Button'
import Radio from '../components/common/Radio'
import TextArea from '../components/common/TextArea'
import { n } from '../utils/normalize'

export default function Food() {
    const navigation = useNavigation()

    function onSubmit() {
        navigation.navigate('Success')
        console.log('onSubmit Food')
    }

    const delivery = [
        { value: true, name: 'O\'zim' },
        { value: false, name: 'Yetqazib berish xizmati' },
    ]

    return (
        <Container style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'none'} keyboardVerticalOffset={80}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>Oziq ovqat</Text>
                    <Text style={styles.subTitle}>oziq-ovqat mahsulotlarini yuborish</Text>

                    <Formik onSubmit={onSubmit} initialValues={{ delivery: '', amount: '' }}>
                        {({ handleSubmit, values, setFieldValue }) => (
                            <View>
                                <ButtonLikeInput
                                    label="Kimga"
                                    title={values.address ? values.address : 'Tanglang'}
                                    styleText={{ color: 'gray' }}
                                    onPress={() => navigation.navigate('Recipient', { setFieldValue, to: 'Food' })} />

                                <Text style={{
                                    fontSize: n(20),
                                    fontWeight: '600',
                                    marginBottom: n(10),
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
            </KeyboardAvoidingView>
        </Container>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: n(42),
        fontWeight: 'bold',
    },
    radio: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: n(10),
    },
    subTitle: {
        fontSize: n(24),
        fontWeight: '400',
        marginBottom: n(20),
    },
})
