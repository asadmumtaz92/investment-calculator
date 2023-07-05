import styles from './styles/TableResult.module.css'

// FOR AMOUNT FORMAT
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const TableResult = (props) => {

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.th}>Year</th>
                    <th className={styles.th}>Total Savings</th>
                    <th className={styles.th}>Interest (Year)</th>
                    <th className={styles.th}>Total Interest</th>
                    <th className={styles.th}>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props?.result.map(item => {
                    return (
                        <tr key={item.year}>
                            <td className={styles.td}>{item.year}.</td>
                            <td className={styles.td}>{formatter.format(item.savingEndOfYear)}</td>
                            <td className={styles.td}>{formatter.format(item.yearlyInterest)}</td>
                            <td className={styles.td}>
                                {formatter.format(item.savingEndOfYear -
                                    item?.initialInvestment - item?.yearlyContribution * item.year)
                                }
                            </td>
                            <td className={styles.td}>
                                {formatter.format(item?.initialInvestment + item?.yearlyContribution * item.year)}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TableResult
