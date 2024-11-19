import Header from "../../components/header/header.tsx";
import styles from "./mainPage.module.scss"

export default function MainPage() {
    return (
        <div className={styles.container}>
            <Header />
        </div>
    )
}