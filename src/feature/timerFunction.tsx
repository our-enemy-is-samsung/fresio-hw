import { useState, useEffect } from "react";

type TimerProps = {
    initialMinute: number;
    initialSecond: number;
    stopped: boolean;
    initialTime: boolean;
};

export default function Timer({ initialMinute, initialSecond, stopped, initialTime }: TimerProps) {
    const [minute, setMinute] = useState(initialMinute);
    const [second, setSecond] = useState(initialSecond);

    useEffect(() => {
        if (initialTime) {
            setMinute(initialMinute);
            setSecond(initialSecond);
        }
    }, [initialTime, initialMinute, initialSecond]);

    useEffect(() => {
        if (stopped) return;
        const intervalId = setInterval(() => {
            setSecond((prevSecond) => {
                if (prevSecond > 0) {
                    return prevSecond - 1;
                } else if (minute > 0) {
                    setMinute((prevMinute) => prevMinute - 1);
                    return 59;
                } else {
                    clearInterval(intervalId);
                    return prevSecond;
                }
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [stopped, minute]);

    return (
        <div>
            <p style={{fontSize:"110px", fontWeight:"bold", color:"white"}}>{minute}:{second}</p>
        </div>
    );
}
