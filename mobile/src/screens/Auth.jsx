import React, { useState } from 'react'
import { Text, StyleSheet, View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import ServerError from '../components/common/ServerError'
import { colors } from '../utils/colors'
import { SIGNIN } from '../urls'
import { usePostRequest } from '../hooks/request'

export default function Auth() {
    const navigation = useNavigation()
    const signIn = usePostRequest({ url: SIGNIN, headers: {} })

    const [serverError, setServerError] = useState('')

    async function onSubmit(data) {
        setServerError('')
        const { error } = await signIn.request({ data })
        if (error) {
            setServerError(error)
            return
        }
        navigation.navigate('Confirm', { phone: data.phone })
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Text style={styles.headerTitle}>Номер телефона</Text>
                <Text style={styles.headerSubtitle}>Введите номер телефона чтобы
                    <Text style={styles.headerSpan}> войти</Text> или
                    <Text style={styles.headerSpan}> зарегистрироваться</Text>
                </Text>

                <Formik onSubmit={onSubmit} initialValues={{ code: '+998', phone: '' }}>
                    {({ handleSubmit, isValid }) => (
                        <View style={styles.wrapper}>
                            <Input
                                style={!isValid ? styles.validation : null}
                                text={styles.inputText}
                                name="phone"
                                type="text"
                                keyboard="numeric"
                                masked="phone"
                                left={(
                                    // eslint-disable-next-line jsx-a11y/accessible-emoji
                                    <Text style={styles.leftBlock}>🇺🇿
                                        <Text style={styles.leftBlockSpan}>   |   +998</Text>
                                    </Text>
                                )}
                                placeholder="(33) 234-2323"
                                placeholderTextColor="#B0B0B0"
                                maxLength={13} />
                            <ServerError error={serverError} fieldOff />
                            <Button onPress={handleSubmit} title="Далее" />
                        </View>
                    )}
                </Formik>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 25,
    },
    headerTitle: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.PRIMARY,
    },
    headerSubtitle: {
        fontSize: 17,
        textAlign: 'center',
        marginVertical: 20,
        color: colors.DARK_GREY,
    },
    headerSpan: {
        color: colors.PRIMARY,
    },
    wrapper: {
        width: '100%',
    },
    input: {
        fontWeight: 'bold',
    },
    inputText: {
        fontWeight: 'bold',
        color: '#686866',
    },
    validation: {
        fontWeight: 'bold',
        color: colors.DARK_GREY,
        borderWidth: 1,
        borderColor: 'red',
        borderStyle: 'solid',
    },
    leftBlock: {
        fontWeight: 'bold',
        color: '#C4C4C4',
    },
    leftBlockSpan: {
        fontSize: 17,
        color: '#C4C4C4',
        fontWeight: 'bold',
    },
})
