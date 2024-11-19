import styles from "./settingPage.module.scss"
import qr from "../../assets/images/qr.svg"

export function SettingPage() {
    return (
        <div className={styles.container}>
            <div className={styles.informationBox}>
                <h1>앱 다운로드 및 연동</h1>
                <div className={styles.informationContents}>
                    <div className={styles.informationContent}>
                        <span>1</span>
                        <p>QR코드를 인식해
                            스마트폰 혹은 태블릿에 Fresio 앱을 다운 받아주세요
                        </p>
                    </div>
                    <div className={styles.informationContent}>
                        <span>2</span>
                        <p>Fresio 앱으로 기기를 설정해주세요</p>
                    </div>
                </div>

            </div>
            <div className={styles.qrNcodeBox}>
                <img src={qr} alt="QR"/>
                <p>인증 코드</p>
                <h3>J23HQ</h3>
            </div>
        </div>
    )

}