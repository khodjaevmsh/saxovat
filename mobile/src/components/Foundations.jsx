import React from 'react'
import FondCard from './FondCard'
import Scroll from './common/Scroll'

export default function Foundations() {
    const foundations = {
        response: [
            { name: 'Тест' },
        ],
    }

    return (
        <Scroll
            items={foundations.response}
            horizontal
            paging
            renderItem={(item, index) => (
                <FondCard fond={item} key={index} />
            )} />
    )
}
