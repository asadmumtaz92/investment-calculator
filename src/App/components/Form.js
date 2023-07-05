import React, { useState } from 'react'
import styles from './styles/Form.module.css'
import ErrorModal from '../customModals/errorModal'

const Form = (props) => {

    const [currentSaving, setCurrentSaving] = useState('')
    const [yearlySaving, setYearlySaving] = useState('')
    const [expectedInterest, setExpectedInterest] = useState('')
    const [duration, setDuration] = useState('')
    const [showModal, setShowModal] = useState(false)

    const InputFeild = (label, value, func) => {
        return (
            <div className={styles.inputBox}>
                <label className={styles.label}>{label}</label>
                <input type='number' value={value} className={styles.ip} onChange={func} />
            </div>
        )
    }

    const currentSavingHandler = (event) => {
        setCurrentSaving(event?.target?.value)
     }
    const yearlySavingHandler = (event) => {
        setYearlySaving(event?.target?.value)
    }
    const expectedIntrerustHandler = (event) => {
        setExpectedInterest(event?.target?.value)
    }
    const durationHandler = (event) => {
        setDuration(event?.target?.value)
    }

    const calculateHandler = () => {
        let disabled = false
        if (currentSaving.trim().length === 0) { disabled = true }
        else { disabled = false }
        if (yearlySaving.trim().length === 0) { disabled = true }
        else { disabled = false }
        if (expectedInterest.trim().length === 0) { disabled = true }
        else { disabled = false }
        if (duration.trim().length === 0) { disabled = true }
        else { disabled = false }

        if (!disabled) {
            setShowModal(false)
            let finalData = {
                currentSaving: +currentSaving,
                yearlySaving: +yearlySaving,
                expectedInterest: +expectedInterest,
                duration: +duration,
            }
            props?.inputDataHandler(finalData)
        }
        else {
            setShowModal(true)
        }
    }

    const resetHandler = () => {
        setCurrentSaving('')
        setYearlySaving('')
        setExpectedInterest('')
        setDuration('')
        props?.reset()
    }

    const buttonHandler = () => {
        setShowModal(false)
    }


    return (
        <div className={styles.form}>
            <div className={styles.row}>
                {InputFeild(
                    'Current Savings ($)',
                    currentSaving,
                    currentSavingHandler
                )}

                {InputFeild(
                    'Yearly Savings ($)',
                    yearlySaving,
                    yearlySavingHandler
                )}
            </div>

            <div className={styles.row}>
                {InputFeild(
                    'expected Interest (%, per year)',
                    expectedInterest,
                    expectedIntrerustHandler
                )}

                {InputFeild(
                    'Investment duration (years)',
                    duration,
                    durationHandler
                )}
            </div>

            <div className={styles.btnBox}>
                <button className={styles.buttonReset} onClick={resetHandler}>Reset</button>
                <button className={styles.button} onClick={calculateHandler}>Calculate</button>
            </div>

            {/* ERROR MODAL */}
            {showModal && <ErrorModal
                title='An error occured!!'
                message='Something went wrong...'
                buttonHandler={buttonHandler}
            />}
        </div>
    )
}

export default Form
