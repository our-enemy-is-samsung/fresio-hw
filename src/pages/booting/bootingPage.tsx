import LogoPrimary from "../../assets/images/Logo Primary.svg"
import styles from "./bootingPage.module.scss"
import LoadingBar from "../../components/loadingBar/LoadingBar.tsx";
export default function BootingPage(){
    return (
        <div className={styles.container}>
            <img src={LogoPrimary} alt="logo"/>
            <LoadingBar/>
        </div>
    )
}