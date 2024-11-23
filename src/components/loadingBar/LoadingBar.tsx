import styles from "./loadingBar.module.scss";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

export default function LoadingBar() {
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
        }, 10);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <div
                className={styles.loadingBar}
                id="process"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
}
