import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import Input from './common/Input'
import Button from './common/Button'
import TextArea from './common/TextArea'
import { n } from '../utils/normalize'
import Radio from './common/Radio'
import { recipientCategory } from '../utils/recipientCategory'
import { usePostRequest } from '../hooks/request'
import { RECIPIENT } from '../urls'

export default function RecipientForm() {
    const recipientCreate = usePostRequest({ url: RECIPIENT })
    const navigation = useNavigation()

    async function onSubmit(data, actions) {
        const { error } = await recipientCreate.request({ data })

        if (error) {
            return
        }

        navigation.navigate('Processing')
        actions.resetForm()
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
                        <Radio name="category" items={recipientCategory} />
                    </View>

                    <View style={styles.input}>
                        <Input
                            text={styles.inputText}
                            label="Telefon raqami"
                            name="phone"
                            type="text"
                            keyboard="numeric"
                            masked="(99) 999-99-99"
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
        marginVertical: n(5),
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
