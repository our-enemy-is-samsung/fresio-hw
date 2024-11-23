import { useState, useEffect } from "react";

type TimerProps = {
    initialSeconds: number; // 초로 입력받음
    stopped: boolean;
    initialTime: boolean;
    onEnd: () => void; // 타이머가 끝났을 때 호출되는 콜백
};

export default function Timer({ initialSeconds, stopped, initialTime, onEnd }: TimerProps) {
    const [totalSeconds, setTotalSeconds] = useState(initialSeconds);
    const formatTime = (seconds: number) => ({
        minute: Math.floor(seconds / 60),
        second: seconds % 60,
    });

    useEffect(() => {
        if (initialTime) {
            setTotalSeconds(initialSeconds);
        }
    }, [initialTime, initialSeconds]);

    useEffect(() => {
        if (stopped) return;
        const intervalId = setInterval(() => {
            setTotalSeconds((prevSeconds) => {
                if (prevSeconds > 0) {
                    return prevSeconds - 1;
                } else {
                    clearInterval(intervalId);
                    onEnd();
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [stopped, onEnd]);

    const { minute, second } = formatTime(totalSeconds);

    return (
        <div>
            <p style={{ fontSize: "110px", fontWeight: "bold", color: "white" }}>
                {minute}:{second.toString().padStart(2, "0")}
            </p>
        </div>
    );
}

