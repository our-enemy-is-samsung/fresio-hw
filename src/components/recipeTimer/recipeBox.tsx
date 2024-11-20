import {useEffect} from "react";

type recipeBoxProps = {
    description : string;
    focused : boolean;
}

import styles from "./recipeBox.module.scss"

export default function RecipeBox({ description, focused }: recipeBoxProps) {

    return (
        <div className={styles.container} style={focused ? {opacity:"1"} : {opacity:"0.6"}}>
            <h1>{focused ? `현재 레시피` : `다음 레시피`}</h1>
            <p>{description}</p>
        </div>
    )
}