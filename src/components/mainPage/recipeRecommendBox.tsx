
import kimchi from "../../assets/images/kimchi.svg"
import recipeIcon from "../../assets/images/recipeIcon.svg"
import styles from "./recipeRecommendBox.module.scss"

export default function RecipeRecommendBox () {

    return (
        <div className={styles.container} >
            <div className={styles.textContainer}>
                <span>
                    <img src={recipeIcon}/>
                    <p>추천하는 레시피</p>
                </span>
                <span>
                    <h3>3분 소요</h3>
                    <h2>김치찜</h2>
                </span>
            </div>
            <img src={kimchi} alt="kimchi" />
        </div>
    )
}