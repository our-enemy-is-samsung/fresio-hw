import { useState, useEffect } from "react";

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
    }, [expirationDate, date]);

    return (
        <div>
            <h1>{isExpired ? `${name} has expired` : `Time left: ${daysLeft} day(s)`}</h1>
        </div>
    );
}
