import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Formik } from 'formik'
import Input from './common/Input'
import Button from './common/Button'
import TextArea from './common/TextArea'
import Radio from './common/Radio'
import { n } from '../utils/normalize'

export default function RecipientForm() {
    const categories = [
        { value: true, name: 'Shaxs' },
        { value: false, name: 'Tashkilot' },
    ]

    function onSubmit() {
        console.log('success submit')
    }

    return (
        <Formik onSubmit={onSubmit} initialValues={{ name: '', phone: '', comment: '', category: '' }}>
            {({ handleSubmit }) => (
                <View>
                    <View style={styles.input}>
                        <Input
                            text={styles.inputText}
                            label="Ismi"
                            name="name"
                            type="text"
                            placeholder="Familiya, Ism"
                            placeholderTextColor="#C4C4C4"
                            maxLength={45} />
                    </View>

                    <View style={styles.radio}>
                        <Radio name="category" items={categories} />
                    </View>

                    <View style={styles.input}>
                        <Input
                            text={styles.inputText}
                            label="Telefon raqami"
                            name="phone"
                            type="text"
                            keyboard="numeric"
                            masked="phoneSecond"
                            left={(
                            // eslint-disable-next-line jsx-a11y/accessible-emoji
                                <Text style={styles.inputText}>🇺🇿
                                    <Text style={styles.inputText}>   |   +998</Text>
                                </Text>
                            )}
                            placeholder="(33) 234 23 23"
                            placeholderTextColor="#C4C4C4"
                            maxLength={14} />
                    </View>

                    <View style={styles.input}>
                        <TextArea
                            style={styles.inputText}
                            multiline
                            label="Qo’shimcha ma’lumot"
                            name="comment"
                            keyboard="default"
                            placeholder="Manzil va qo’shimcha ma’lumotlar uchun"
                            placeholderTextColor="#C4C4C4"
                            maxLength={255} />
                    </View>

                    <Button onPress={handleSubmit} title="Qo’shish" />
                </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 5,
    },
    inputText: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#686866',
    },
    radio: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: n(10),
    },
})
