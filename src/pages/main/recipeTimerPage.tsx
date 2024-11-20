import styles from "./recipeTimerPage.module.scss";
import RecipeBox from "../../components/recipeTimer/recipeBox.tsx";
import { useState, useEffect } from "react";
import Timer from "../../feature/timerFunction.tsx";
import Button from "../../components/Button.tsx";
import pause from "../../assets/images/pause.svg"
import x from "../../assets/images/X.svg"
import restart from "../../assets/images/restart.svg"

export default function RecipeTimerPage() {
    const [timerStop, setTimerStop] = useState(false);
    const [isInitial, setIsInitial] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState<string>("");

    useEffect(() => {
        const randomBackground = () => {
            const random = Math.floor(Math.random() * 10);
            return random >= 5 ? "var(--success)" : "var(--brand)";
        };
        setBackgroundColor(randomBackground());
    }, []);

    const handleReset = () => {
        if (timerStop) {
            setIsInitial(true);
            setTimerStop(true);
        }
    };

    return (
        <div className={styles.container} style={{ backgroundColor }}>
            <div className={styles.timerSection}>
                <div>
                    <p>step</p>
                    <Timer initialMinute={1} initialSecond={20} stopped={timerStop} initialTime={isInitial}/>
                </div>
                <div>
                    {!timerStop && (
                        <>
                        <Button width="226px"
                                    height="72px"
                                    onclick={() => setTimerStop(true)}
                                    backgroundColor="--content"
                                    className={styles.timerButtons}>
                                <img src={pause} alt="pause icon" />
                                <p>타이머 멈추기</p>
                            </Button>
                        </>
                    )}
                    {timerStop && (
                        <div className={styles.timerButtonBox}>
                            <Button width="239px"
                                    height="72px"
                                    onclick={handleReset}
                                    backgroundColor="--error"
                                    className={styles.timerButtons}>
                                <img src={x} alt="reset icon" />
                                <p>타이머 끝내기</p>
                            </Button>
                            <Button width="294px"
                                    height="72px"
                                    onclick={() => {
                                setTimerStop(false);
                                setIsInitial(false);
                            }}
                                    backgroundColor="--content"
                                    className={styles.timerButtons}>
                                <img src={restart} alt={"restart icon"}/>
                                <p>눌러서 다시 시작하기</p>
                                </Button>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.recipeSection}>
                <RecipeBox description="Asdf" focused={true} />
                <RecipeBox description="Asdf" focused={false} />
            </div>
        </div>
    );
}
