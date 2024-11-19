import styles from "./header.module.scss"

export default function Header() {

    const DateFunction = () => {
        const date = new Date();
        return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
    }

    return (
        <div className={styles.container}>
            <div>
                {DateFunction()}
            </div>
            <div>

            </div>
        </div>
    )
}