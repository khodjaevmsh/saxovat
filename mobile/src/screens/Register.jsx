import React, { useState, useContext } from 'react'
import { Formik } from 'formik'
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../utils/colors'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import { usePutRequest } from '../hooks/request'
import { CHANGE_NAME } from '../urls'
import ServerError from '../components/common/ServerError'
import { GlobalContext } from '../contexts/GlobalContext'

export default function Register() {
    const [serverError, setServerError] = useState('')
    const navigation = useNavigation()
    const userUpdate = usePutRequest({ url: CHANGE_NAME })
    const { auth, token } = useContext(GlobalContext)

    async function onSubmit(data) {
        setServerError('')
        const { error, response } = await userUpdate.request({ data })
        if (error) {
            setServerError(error)
            return
        }

        await auth(token, response)
        navigation.reset({ index: 0, routes: [{ name: 'TabScreen' }] })
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Text style={styles.headerTitle}>Регистрация</Text>
                <Text style={styles.headerSubtitle}>Введите
                    <Text style={styles.headerSpan}> ваше имя</Text>
                </Text>
                <Formik onSubmit={onSubmit} initialValues={{ firstName: '' }}>
                    {({ handleSubmit }) => (
                        <View>
                            <Input
                                style={styles.input}
                                text={styles.inputText}
                                name="firstName"
                                type="text"
                                keyboard="default"
                                placeholder="Иван"
                                maxLength={45} />
                            <ServerError error={serverError} fieldOff style={styles.serverError} />
                            <Button onPress={handleSubmit} loading={userUpdate.loading} title="Далее" />
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
    sign: {
        color: colors.PRIMARY,
    },
    input: {
        paddingHorizontal: 25,
    },
    inputText: {
        fontWeight: 'bold',
        color: colors.DARK_GREY,
    },
})
