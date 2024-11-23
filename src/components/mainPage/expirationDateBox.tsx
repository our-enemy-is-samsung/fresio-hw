import { useState, useEffect } from "react";
import jinam from "../../assets/images/jinam.svg";
import ulma from "../../assets/images/ulmaannameum.svg";
import styles from "./expirationDateBox.module.scss";

type expirationDateBoxProps = {
    expirationDate?: string;
    name?: string;
    lists?: Array<any>;
};

export default function ExpirationDateBox({ expirationDate, name, lists }: expirationDateBoxProps) {
    const [isExpired, setIsExpired] = useState(false);
    const [daysLeft, setDaysLeft] = useState<number | null>(null);

    useEffect(() => {
        const expirationDateObj = new Date(expirationDate); // 문자열을 Date 객체로 변환
        const currentDate = new Date();

        if (expirationDateObj < currentDate) {
            setIsExpired(true); // 유통기한이 지난 경우
            setDaysLeft(0); // 유통기한이 지났으므로 남은 일수는 0
        } else {
            setIsExpired(false);
            const timeLeft = expirationDateObj.getTime() - currentDate.getTime();
            setDaysLeft(Math.floor(timeLeft / (1000 * 3600 * 24))); // 남은 일수를 계산
        }
    }, [expirationDate]); // expirationDate가 변경될 때마다 실행

    // 유통기한이 5일 이상 남은 경우는 렌더링하지 않음
    if (daysLeft !== null && daysLeft >= 5) {
        return null;
    }

    const boxStyle = isExpired ? { backgroundColor: 'var(--content-dim)' } : { backgroundColor: 'var(--error)' };

    return (
        <>
            <div style={boxStyle} className={styles.container}>
                <div className={styles.foodContent1}>
                    <img src={isExpired ? jinam : ulma} alt="food icon" />
                    <p>{isExpired ? '유통기한이 지났습니다' : '유통기한이 곧 끝나요'}</p>
                </div>
                <div className={styles.foodContent2}>
                    {lists?.map((item, index) => (
                        <div key={index}>
                            <p>{item.name}</p> {/* 항목 이름 */}
                            {!isExpired && daysLeft !== null && <p>({daysLeft}일 남음)</p>} {/* 남은 일수 표시 */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
