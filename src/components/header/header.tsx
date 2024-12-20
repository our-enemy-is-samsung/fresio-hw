import styles from "./header.module.scss"
import batteryknob from "../../assets/images/Frame 3.svg"
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import wifi from "../../assets/images/wifi.svg"
import newDateFunction from "../../feature/newDateFunction.tsx"

export default function Header() {
    const navigate = useNavigate();

    const batteryFunction = () => {
        const battery = 90 // 나중에 배터리양 구해올거임
        const remainingAmount = document.getElementById("remainingAmount");
        if(remainingAmount){
            remainingAmount.style.width = `${23/100 * battery}px`
            if (battery === 0) {
                navigate("/set")
            } else if(battery > 0 && battery <= 30) {
                remainingAmount.style.backgroundColor= `var(--error)`
            } else {
                remainingAmount.style.backgroundColor= `var(--brand)`
            }
        }

    }

    useEffect(() => {
        batteryFunction()
    })

    return (
        <div className={styles.container}>
            <div>
                <p>
                    {newDateFunction()}
                </p>
            </div>

            <div className={styles.widget}>
                <div className={styles.batteryContainer}>
                    <div className={styles.battery}>
                        <div style={{maxWidth: "23px", height: "8px", borderRadius: "2.5px", backgroundColor: "var(--brand)"}} id="remainingAmount"/>
                    </div>
                    <img src={batteryknob} alt="Batteryknob"/>
                </div>
                <img src={wifi} alt="Wifi"/>
            </div>
        </div>
    )
}