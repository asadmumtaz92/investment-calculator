import styles from './styles/Header.module.css'

const Header = ({title, image}) => {
    return (
        <div className={styles.header}>
            <img src={image} className={styles.image} alt='LOGO...' />
            <h1 className={styles.slug}>{title}</h1>
        </div>
    )
}

export default Header
