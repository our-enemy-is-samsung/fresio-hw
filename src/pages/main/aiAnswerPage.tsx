import styles from "./aiAnswerPage.module.scss"
import Header from "../../components/header/header.tsx";
import {useState} from "react";
import Button from "../../components/Button.tsx";
import newDateFunction from "../../feature/newDateFunction.tsx";

export default function AIAnswerPage() {
    const [page, setPage] = useState(2);

    return (
        <div className={styles.container}>
            {page === 1 && (
                <div className={styles.answerOneContainer}>
                    <div className={styles.answerOneContent1}>
                        <Header />
                        <h1>김치찜</h1>
                    </div>
                    <div className={styles.answerOneContent2}>
                        <h6>청주 3, 다진 마늘 1, 생강가루 0.3, 후춧가루 약간을 넣어 돼지고기 밑간을 해주세요. 김치찜에 넣을 고기는 큼지막하게 넣거나 또는 덩어리로 넣어주고 먹기 직전에
                            가위로 싹둑싹둑 잘라 드심 된답니다.</h6>

                        <h6>청주 3, 다진 마늘 1, 생강가루 0.3, 후춧가루 약간을 넣어 돼지고기 밑간을 해주세요. 김치찜에 넣을 고기는 큼지막하게 넣거나 또는 덩어리로 넣어주고 먹기 직전에
                            가위로 싹둑싹둑 잘라 드심 된답니다.넣거나 또는 덩어리로 넣어주고 먹기 직전에 가위로 싹둑싹둑 잘라 드심 된답니다.</h6>

                        <h6>청주 3, 다진 마늘 1, 생강가루 0.3, 후춧가루 약간을 넣어 돼지고기 밑간을 해주세요. 김치찜에 넣을 고기는 큼지막하게 넣거나 또는 덩어리로 넣어주고 먹기 직전에
                            가위로 싹둑싹둑 잘라 드심 된답니다.</h6>

                        <h6>청주 3, 다진 마늘 1, 생강가루 0.3, 후춧가루 약간을 넣어 돼지고기 밑간을 해주세요. 김치찜에 넣을 고기는 큼지막하게 넣거나 또는 덩어리로 넣어주고 먹기 직전에
                            가위로 싹둑싹둑 잘라 드심 된답니다.</h6>

                        <h6>청주 3, 다진 마늘 1, 생강가루 0.3, 후춧가루 약간을 넣어 돼지고기 밑간을 해주세요. 김치찜에 넣을 고기는 큼지막하게 넣거나 또는 덩어리로 넣어주고 먹기 직전에
                            가위로 싹둑싹둑 잘라 드심 된답니다.</h6>

                        <h6>청주 3, 다진 마늘 1, 생강가루 0.3, 후춧가루 약간을 넣어 돼지고기 밑간을 해주세요. 김치찜에 넣을 고기는 큼지막하게 넣거나 또는 덩어리로 넣어주고 먹기 직전에
                            가위로 싹둑싹둑 잘라 드심 된답니다.</h6>
                    </div>
                    <Button width="200px" onclick={() => {console.log(page)}} className={styles.button}>안내 시작</Button>
                </div>
            )}
            {page === 2 && (
                <div className={styles.answerTwoContainer}>
                    <Header/>
                    <h6>현재 일정</h6>
                    <h1>{newDateFunction()}</h1>
                </div>
            )}
        </div>
    )
}