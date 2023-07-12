import MealData from "./MealData"
import MealTags from "./Tags"
import Ingredients from "./Ingredients"

function MealPreview({MealImg, MealName, MealCategory, MealLink, Tags, Ing}){
    return (
        <div className="meal-preview">
            <img 
            src={MealImg}
            alt="meal-img"/>
            <div className="align-right">
                <MealData name={MealName} category={MealCategory} link={MealLink}/>
                <MealTags tags={Tags}/>
                <Ingredients ingredients={Ing}/> {/* an array */}
            </div>
        </div>
    )
}

export default MealPreview