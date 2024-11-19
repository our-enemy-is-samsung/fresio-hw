import Header from "../../components/header/header.tsx";
import styles from "./mainPage.module.scss";
import ExpirationDateBox from "../../components/mainPage/expirationDateBox.tsx";

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
    return (
        <div className={styles.container}>
            <Header />
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
        </div>
    );
}
