import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import Container from '../components/common/Container'
import ButtonLikeInput from '../components/common/ButtonLikeInput'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import { colors } from '../utils/colors'

export default function Money() {
    const navigation = useNavigation()

    function onSubmit() {
        console.log('onSubmit Money')
    }

    return (
        <Container>
            <Text style={styles.title}>Mablag’ o’tkazish</Text>
            <Text style={styles.subTitle}>o’tkazma ma’lumotlarini kiriting</Text>

            <Formik onSubmit={onSubmit} initialValues={{ address: '', amount: '' }}>
                {({ handleSubmit }) => (
                    <View>
                        <ButtonLikeInput
                            label="Kimga"
                            title="Mehribonlik uyi №15"
                            styleText={{ color: 'gray' }}
                            onPress={() => navigation.navigate('Recipient')} />

                        <Input
                            right={<Text>UZS</Text>}
                            label="Summa"
                            name="amount"
                            keyboard="numeric"
                            placeholder="25 000"
                            maxLength={55} />

                        <Button style={styles.button} onPress={handleSubmit} title="Yuborish" />
                    </View>
                )}
            </Formik>
        </Container>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 42,
        fontWeight: 'bold',
        color: colors.dark_swampy,
    },
    subTitle: {
        fontSize: 24,
        fontWeight: '400',
        marginBottom: 20,
        color: colors.light_gray,
    },
    button: {
        marginTop: 40,
    },
})
