import {useState} from "react"

import MealPreview from "./MealPreview"
import MealMeasurements from "./MealMeasurements"
import MealInstructions from "./MealInstructions"

function MealCard({MealThumb,mealName,mealCategory,mealLink,mealTags,MealIng,MealMeasrmnts,MealInstr, CloseRecipe, GetRecipe}){

    const [isVisible, setIsVisible] = useState("none")

    function GetRecipe(){
        setIsVisible("block")
    }

    function CloseRecipe(){
        setIsVisible("none")
    }

    return (
        <div className="meal-card">
                <img src={MealThumb} className="meal-img"/>
                <span className="meal-category">{mealCategory}</span>
                <div className="meal-info">
                    <h1 className="meal-name">{mealName}</h1>
                    <div className="meal-desc" style={{display: `${isVisible}`}}>
                        <button onClick={CloseRecipe}>✖️</button>
                        <MealPreview 
                            MealImg={MealThumb} 
                            MealName={mealName} 
                            MealCategory={mealCategory} 
                            MealLink={mealLink}
                            Tags={mealTags}
                            Ing={MealIng}
                        />
                        <MealMeasurements 
                            measure={MealMeasrmnts}
                        /> {/* an array */}
                        <MealInstructions
                            instructions={MealInstr} 
                        /> 
                    </div>
                    <button 
                    className="recipe-button"
                    onClick={GetRecipe}
                    >Get Recipe</button>
                </div>
        </div>
    )
}

export default MealCard