import { useState, useEffect } from "react";
import jinam from "../../assets/images/jinam.svg";
import ulma from "../../assets/images/ulmaannameum.svg";
import styles from "./expirationDateBox.module.scss"

type expirationDateBoxProps = {
    expirationDate: number;
    name: string;
};

export default function ExpirationDateBox({ expirationDate, name }: expirationDateBoxProps) {
    const [isExpired, setIsExpired] = useState(false);
    const [daysLeft, setDaysLeft] = useState<number | null>(null);
    const date = new Date();

    useEffect(() => {
        const expiredFunction = () => {
            const expirationDateObj = new Date(expirationDate);
            if (expirationDateObj < date) {
                setIsExpired(true);
            } else {
                setIsExpired(false);
                const timeLeft = expirationDateObj.getTime() - date.getTime();
                setDaysLeft(Math.floor(timeLeft / (1000 * 3600 * 24)));
            }
        };
        expiredFunction();
    }, [expirationDate, date, isExpired]);

    if (daysLeft !== null && daysLeft >= 5) {
        return null;
    }
    const boxStyle = isExpired ? { backgroundColor: 'var(--content-dim)' } : { backgroundColor: 'var(--error)' };

    return (
        <>
            <div style={boxStyle} className={styles.container}>
                <div className={styles.foodContent1}>
                    <img src={isExpired ? jinam : ulma}/>
                    <p>{isExpired ? '유통기한이 지났습니다' : '유통기한이 곧 끝나요'}</p>
                </div>
                <div>
                    <div className={styles.foodContent2}>
                        <p>{name}</p>
                        <p>{isExpired ? `` : `(${daysLeft}일)`}</p>
                    </div>
                </div>
            </div>
        </>

    );
}
