import Header from "../../components/header/header.tsx";
import styles from "./mainPage.module.scss";
import ExpirationDateBox from "../../components/mainPage/expirationDateBox.tsx";
import RecipeRecommendBox from "../../components/mainPage/recipeRecommendBox.tsx";
import {useState} from "react";

const DummyData = {
    1: {
        name: "김치찜",
        expirationDate: "2024-11-23"
    },
    3: {
        name: "바나나",
        expirationDate: "2024-11-18"
    },
    4: {
        name: "짜호삥",
        expirationDate: "2024-11-31"
    }
};



export default function MainPage() {
    const [isRecognition , setIsRecognition] = useState(false);

    return (
        <div className={styles.container}>
            <div style={{width:'90%'}}>
                <Header />
            </div>
            <div className={styles.foodContainer}>
                {Object.keys(DummyData).map((key) => {
                    const { name, expirationDate } = DummyData[parseInt(key)]; // 각 데이터 항목을 가져옴
                    const expirationDateMillis = new Date(expirationDate).getTime(); // expirationDate를 밀리초로 변환
                    return (
                        <ExpirationDateBox
                            key={key}
                            expirationDate={expirationDateMillis}
                            name={name}
                        />
                    );
                })}
                <RecipeRecommendBox/>
            </div>
            <div className={styles.recipeContainer} onClick={() => setIsRecognition(true)}>
                <h1>
                    {`${new Date().getHours()}:${new Date().getMinutes()}`}
                </h1>
                <div className={styles.recipeName}>
                    <p>이탈리아 전통 스테이크</p>
                </div>
            </div>
            {isRecognition && (
                <div className={styles.aiActivationContainer}  onClick={() => setIsRecognition(false)}>
                    <h1>저녁 추천좀</h1>
                    <div></div>
                </div>
            )}
        </div>
    );
}
