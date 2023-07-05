import React, { useState } from 'react'
import styles from '../styles/Home.module.css'

import logo from '../assets/imagelogo.png'
import Header from '../components/Header'
import Form from '../components/Form'
import TableResult from '../components/TableResult'


const Home = () => {

    const [data, setData] = useState(null)
    const yearlyData = []

    const inputDataHandler = (uData) => {
        setData(uData)
    }

    const resetHandler = () => {
        setData(null)
    }

    if (data) {
        let currentSaving = data?.currentSaving
        const yearlySaving = data?.yearlySaving
        const expectedInterest = data?.expectedInterest / 100
        const duration = data?.duration

        for (let i = 0; i < duration; i++) {
            const yInt = currentSaving * expectedInterest
            currentSaving += yInt + yearlySaving
            yearlyData.push({
                year: i + 1,
                yearlyInterest: yInt,
                savingEndOfYear: currentSaving,
                yearlyContribution: yearlySaving,
                initialInvestment: data?.currentSaving,
            })
        }
    }

    return (
        <div className={styles.home}>
            <Header title={`Investment calculator`} image={logo} />
            <Form inputDataHandler={inputDataHandler} reset={resetHandler} />
            {/* {!data && <p className={styles.noData}>No investment calculator yet.</p>} */}
            {data
                ? <TableResult result={yearlyData} />
                : <p className={styles.noData}>No investment calculator yet.</p>
            }
        </div>
    )
}

export default Home
