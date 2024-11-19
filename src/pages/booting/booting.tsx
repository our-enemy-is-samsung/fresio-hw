import LogoPrimary from "../../assets/images/Logo Primary.svg"
import styles from "./booting.module.scss"
import LoadingBar from "../../components/loadingBar/LoadingBar.tsx";
export default function Booting(){
    return (
        <div className={styles.container}>
            <img src={LogoPrimary} alt="logo"/>
            <LoadingBar/>
        </div>
    )
}