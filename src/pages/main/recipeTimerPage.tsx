import styles from "./recipeTimerPage.module.scss"
import RecipeBox from "../../components/recipeTimer/recipeBox.tsx";

const dummyData = {

}

export default function RecipeTimerPage() {

    const randomBackground = () => {
        const random = Math.floor(Math.random() * 10);
        console.log(random)
        if (random >= 5) {
            return "var(--success)"
        } else {
            return "var(--brand)"
        }
    }

    return (
        <div className={styles.container} style = {{backgroundColor : randomBackground()}}>
            <div className={styles.timerSection}>
                <p>step</p>
                <h1></h1>
            </div>
            <div className={styles.recipeSection}>
                <RecipeBox description="Asdf" focused={true} />
                <RecipeBox description="Asdf" focused={false} />
            </div>
        </div>
    )
}