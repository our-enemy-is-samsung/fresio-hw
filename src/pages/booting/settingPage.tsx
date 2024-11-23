import styles from "./settingPage.module.scss"
import Lottie from "lottie-react";
import qr from "../../assets/images/qr.svg"
import bootAnimation from "../../assets/json/bootAnimation.json"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export function SettingPage() {
    const[page, setPage] = useState(2);
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    navigate("/set")
                    return prev;
                }
                return prev + 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [progress]);

    return (
        <div className={styles.container}>
            {page === 0 && (
                <>
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
                </>
                )
            }
            {page === 1 && (
                <div className={styles.connectingContainer}>
                    <div>
                        <h1>인터넷 연결 중...</h1>
                        <p className={styles.wifiName}>SK_WIFID018NS</p>
                    </div>
                    <Lottie animationData={bootAnimation}/>
                </div>
            )}
            {page === 2  && (
                <div className={styles.connectingContainer} onLoad={setProgress}>
                    <div>
                        <h1>소프트웨어 업데이트 중...</h1>
                        <p className={styles.wifiName}>{progress}%</p>
                    </div>
                    <Lottie animationData={bootAnimation}/>
                </div>
            )}
        </div>
    )
}