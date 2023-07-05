import React, { useState } from 'react'
import styles from './styles/Form.module.css'

const Form = (props) => {

    const [currentSaving, setCurrentSaving] = useState(null)
    const [currentSavingError, setCurrentSavingError] = useState('')
    const [yearlySaving, setYearlySaving] = useState(null)
    const [yearlySavingError, setYearlySavingError] = useState('')
    const [expectedInterest, setExpectedInterest] = useState(null)
    const [expectedInterestError, setEexpectedInterestError] = useState('')
    const [duration, setDuration] = useState(null)
    const [durationError, setDurationError] = useState('')

    const InputFeild = (label, value, error, func) => {
        return (
            <div className={styles.inputBox}>
                <label className={styles.label}>{label}</label>
                <input type='number' value={value} className={styles.ip} onChange={func} />
                {error && <p className={styles.error}>{error}</p>}
            </div>
        )
    }

    const currentSavingHandler = (event) => {
        setCurrentSavingError('')
        setCurrentSaving(event?.target?.value)
     }
    const yearlySavingHandler = (event) => {
        setYearlySavingError('')
        setYearlySaving(event?.target?.value)
    }
    const expectedIntrerustHandler = (event) => {
        setEexpectedInterestError('')
        setExpectedInterest(event?.target?.value)
    }
    const durationHandler = (event) => { 
        setDurationError('')
        setDuration(event?.target?.value)
    }

    const calculateHandler = () => {
        let disabled = false
        if (currentSaving == null) {
            setCurrentSavingError('Enter value...')
            disabled = true
        }
        else {
            setCurrentSavingError('')
            disabled = false
        }
        if (yearlySaving == null) {
            setYearlySavingError('Enter value...')
            disabled = true
        }
        else {
            setYearlySavingError('')
            disabled = false
        }
        if (expectedInterest == null) {
            setEexpectedInterestError('Enter value...')
            disabled = true
        }
        else {
            setEexpectedInterestError('')
            disabled = false
        }
        if (duration == null) {
            setDurationError('Enter value...')
            disabled = true
        }
        else {
            setDurationError('')
            disabled = false
        }
        if (!disabled) {
            let finalData = {
                currentSaving: +currentSaving,
                yearlySaving: +yearlySaving,
                expectedInterest: +expectedInterest,
                duration: +duration,
            }
            props?.inputDataHandler(finalData)
            // resetHandler()
        }
    }

    const resetHandler = () => {
        setCurrentSaving('')
        setCurrentSavingError('')
        setYearlySaving('')
        setYearlySavingError('')
        setExpectedInterest('')
        setEexpectedInterestError('')
        setDuration('')
        setDurationError('')
        props?.reset()
    }


    return (
        <div className={styles.form}>
            <div className={styles.row}>
                {InputFeild(
                    'Current Savings ($)',
                    currentSaving,
                    currentSavingError,
                    currentSavingHandler
                )}

                {InputFeild(
                    'Yearly Savings ($)',
                    yearlySaving,
                    yearlySavingError,
                    yearlySavingHandler
                )}
            </div>

            <div className={styles.row}>
                {InputFeild(
                    'expected Interest (%, per year)',
                    expectedInterest,
                    expectedInterestError,
                    expectedIntrerustHandler
                )}

                {InputFeild(
                    'Investment duration (years)',
                    duration,
                    durationError,
                    durationHandler
                )}
            </div>

            <div className={styles.btnBox}>
                <button className={styles.buttonReset} onClick={resetHandler}>Reset</button>
                <button className={styles.button} onClick={calculateHandler}>Calculate</button>
            </div>
        </div>
    )
}

export default Form
