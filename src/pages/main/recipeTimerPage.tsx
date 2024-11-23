import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import styles from "./recipeTimerPage.module.scss";
import RecipeBox from "../../components/recipeTimer/recipeBox.tsx";
import Timer from "../../feature/timerFunction.tsx";
import Button from "../../components/Button.tsx";
import pause from "../../assets/images/pause.svg";
import x from "../../assets/images/X.svg";
import restart from "../../assets/images/restart.svg";

const dummyData = {
    name: "김치찜",
    "1": {
        description: "밀가루 3컵이면 2~3명이서 먹기 딱 좋은 양이 된답니다.\n" +
            "만들어둔 반죽은 비닐에 넣어 1시간 이상 숙성시켜주세요. 숙성한 반죽을 익힘 없이 좌호빈 얼굴에 던진 후 맛있게 먹으면 됩니다",
        time: 5,
    },
    "2": {
        description: "밀가루 5컵이면 2~3명이서 먹기 딱 좋은 양이 된답니다.\n" +
            "만들어둔 반죽은 비닐에 넣어 1시간 이상 숙성시켜주세요. 숙성한 반죽을 익힘 없이 좌호빈 얼굴에 던진 후 맛있게 먹으면 됩니다",
        time: 5,
    },
    "3": {
        description: "밀가루 7컵이면 2~3명이서 먹기 딱 좋은 양이 된답니다.\n" +
            "만들어둔 반죽은 비닐에 넣어 1시간 이상 숙성시켜주세요. 숙성한 반죽을 익힘 없이 좌호빈 얼굴에 던진 후 맛있게 먹으면 됩니다",
        time: 90,
    },
    "4": {
        description: "밀가루 9컵이면 2~3명이서 먹기 딱 좋은 양이 된답니다.\n" +
            "만들어둔 반죽은 비닐에 넣어 1시간 이상 숙성시켜주세요. 숙성한 반죽을 익힘 없이 좌호빈 얼굴에 던진 후 맛있게 먹으면 됩니다",
        time: 50,
    },
};

export default function RecipeTimerPage() {
    const [timerStop, setTimerStop] = useState(false);
    const [isInitial, setIsInitial] = useState(true);
    const [thisRecipeEnd, setThisRecipeEnd] = useState(false);
    const [isRecognition, setIsRecognition] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [nowRecipe, setNowRecipe] = useState<{ description: string; time: number } | null>(null);
    const [nextRecipe, setNextRecipe] = useState<{ description: string; time: number } | null>(null);
    const navigate = useNavigate();

    const handleReset = () => {
        setTimerStop(false);
        setIsInitial(true);
        setCurrentStep(0);
        updateRecipes(0);
        navigate("/")
    };

    useEffect(() => {
        updateRecipes(0);
    }, []);

    const handleTimerEnd = () => {
        setThisRecipeEnd(true);
    };

    const handleNextRecipe = () => {
        const recipeEntries = Object.entries(dummyData).filter(([key]) => key !== "name");
        if (currentStep < recipeEntries.length - 1) {
            setCurrentStep(currentStep + 1);
            updateRecipes(currentStep + 1);
            setThisRecipeEnd(false);
        }
    };

    const updateRecipes = (step: number) => {
        const recipeEntries = Object.entries(dummyData).filter(([key]) => key !== "name");
        setNowRecipe(recipeEntries[step][1] as { description: string; time: number } | null);
        setNextRecipe(recipeEntries[step + 1]?.[1] as { description: string; time: number } | null);
        setIsInitial(!!recipeEntries[step + 1]);
    };

    return (
        <div className={styles.container}>
            <div className={styles.timerSection}>
                {nowRecipe && (
                    <>
                        <Timer
                            key={currentStep} // currentStep이 변경될 때마다 타이머를 리렌더링
                            initialSeconds={nowRecipe.time}
                            stopped={timerStop}
                            initialTime={isInitial}
                            onEnd={handleTimerEnd}
                        />
                    </>
                )}

                <div>
                    {!timerStop && (

                        <div className={styles.stopNnextContainer}>
                            {!thisRecipeEnd && (
                                <Button
                                    width="226px"
                                    height="72px"
                                    onclick={() => setTimerStop(true)}
                                    backgroundColor="--content"
                                    className={styles.timerButtons}
                                >
                                    <img src={pause} alt="pause icon" />
                                    <p>타이머 멈추기</p>
                                </Button>
                            )}
                            {thisRecipeEnd && (
                                <Button
                                    width="100px"
                                    height="72px"
                                    onclick={handleNextRecipe}
                                    backgroundColor="--content"
                                    className={styles.timerButtons}
                                >
                                    <p>다음</p>
                                </Button>
                            )}
                        </div>
                    )}
                    {timerStop && (
                        <div className={styles.timerButtonBox}>
                            <Button
                                width="239px"
                                height="72px"
                                onclick={handleReset}
                                backgroundColor="--error"
                                className={styles.timerButtons}
                            >
                                <img src={x} alt="reset icon" />
                                <p>타이머 끝내기</p>
                            </Button>
                            <Button
                                width="294px"
                                height="72px"
                                onclick={() => {
                                    setTimerStop(false);
                                    setIsInitial(false);
                                }}
                                backgroundColor="--content"
                                className={styles.timerButtons}
                            >
                                <img src={restart} alt="restart icon" />
                                <p>눌러서 다시 시작하기</p>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.recipeSection} onClick={() =>
            {setIsRecognition(true)
            setTimerStop(true)
            }}>
                {nowRecipe && (
                    <RecipeBox description={nowRecipe.description} focused={true} />
                )}
                {nextRecipe && (
                    <RecipeBox description={nextRecipe.description} focused={false} />
                )}
            </div>
            {isRecognition && (
                <div className={styles.aiActivationContainer}  onClick={() => {setIsRecognition(false)
                    setTimerStop(false)
                }}>
                    <h1>저녁 추천좀</h1>
                    <div></div>
                </div>
            )}
        </div>
    );
}
