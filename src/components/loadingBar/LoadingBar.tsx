import styles from "./loadingBar.module.scss"

export default function LoadingBar(){
    return (
        <div className={styles.container}>
            <div className={styles.loadingBar}></div>
        </div>
    )
}