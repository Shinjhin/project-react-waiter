import styles from './footer.module.scss'

const Footer = () => {
    return(
        <div className={styles.container}>
            <p className={styles.footer}>Copyright <span className={styles.c}>c</span> PizzeriaApp 2022 </p>
        </div>
    )
}

export default Footer; 