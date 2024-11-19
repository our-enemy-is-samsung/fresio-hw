import styles from "./loadingBar.module.scss";
import { useEffect, useState } from "react";

export default function LoadingBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    console.log("success");
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
