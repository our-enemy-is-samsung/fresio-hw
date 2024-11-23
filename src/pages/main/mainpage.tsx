import Header from "../../components/header/header.tsx";
import styles from "./mainPage.module.scss";
import ExpirationDateBox from "../../components/mainPage/expirationDateBox.tsx";
import RecipeRecommendBox from "../../components/mainPage/recipeRecommendBox.tsx";
import { useEffect, useState } from "react";
import useDataFetch from "../../feature/useDataFetch.tsx";

export default function MainPage() {
    const [dummyData, setDummyData] = useState<any[]>([]);
    const dummy = useDataFetch({ fetchUrl: "/fridgeList.json" });
    let yesterday;
    let tomorrow;

    useEffect(() => {
        if (dummy) {
            setDummyData(dummy);
        }
    }, [dummy]);

    useEffect(() => {
        yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
        tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
    }, []);

    // 유통기한이 지난 항목과 임박한 항목을 분리
    const expiredItems = dummyData.filter((item) => new Date(item.expiredAt) < new Date());
    const nearExpiredItems = dummyData.filter((item) => {
        const expirationDate = new Date(item.expiredAt);
        const timeLeft = expirationDate.getTime() - new Date().getTime();
        return timeLeft > 0 && timeLeft <= 5 * 24 * 60 * 60 * 1000; // 5일 이내인 경우
    });

    const [isRecognition, setIsRecognition] = useState(false);

    return (
        <div className={styles.container}>
            <div style={{ width: '90%' }}>
                <Header />
            </div>
            <div className={styles.foodContainer}>
                {/* 유통기한이 지난 아이템들이 있을 때, 하나의 박스에 모든 아이템을 표시 */}
                {expiredItems.length > 0 && (
                    <ExpirationDateBox
                        key={`expired`}
                        expirationDate={expiredItems[0].expiredAt}
                        name="유통기한 지난 아이템들"
                        lists={expiredItems} // 모든 expiredItems 배열을 전달
                    />
                )}

                {/* 임박한 유통기한 아이템들이 있을 때, 하나의 박스에 모든 아이템을 표시 */}
                {nearExpiredItems.length > 0 && (
                    <ExpirationDateBox
                        key={`nearExpired`}
                        expirationDate={nearExpiredItems[0].expiredAt}
                        name="유통기한 임박한 아이템들"
                        lists={nearExpiredItems} // 모든 nearExpiredItems 배열을 전달
                    />
                )}

                <RecipeRecommendBox />
            </div>
            <div className={styles.recipeContainer} onClick={() => setIsRecognition(true)}>
                <h1>
                    {`${new Date().getHours()}:${new Date().getMinutes()}`}
                </h1>
                <div className={styles.recipeName}>
                    <p>이탈리아 스테이크</p>
                </div>
            </div>
            {isRecognition && (
                <div className={styles.aiActivationContainer} onClick={() => setIsRecognition(false)}>
                    <h1>저녁 추천좀</h1>
                    <div></div>
                </div>
            )}
        </div>
    );
}
