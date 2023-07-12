import MealCard from "./MealCard";

function MealsContainer({Meals}){
    
    return (
        <div className="meal-card-container">
          {Meals.length > 0 && 
            Meals.map(item => {
                let mealDesc = item.meals[0]
                
                let measurements = []
                let ingredients = []

                
                for(let i = 1; i <= 20; i++){
                    if(mealDesc[`strMeasure${i}`]){
                        measurements.push(mealDesc[`strMeasure${i}`])
                    }
                }

                for(let i = 1; i <= 20; i++){
                    if(mealDesc[`strIngredient${i}`]){
                        ingredients.push(mealDesc[`strIngredient${i}`])
                    }
                }

                return (<MealCard 
                  
                  MealThumb={mealDesc.strMealThumb}
                  mealName={mealDesc.strMeal}
                  mealCategory={mealDesc.strCategory}
                  mealLink={mealDesc.strSource}
                  mealTags={mealDesc.strTags}
                  MealIng={ingredients}
                  MealMeasrmnts={measurements}
                  MealInstr={mealDesc.strInstructions}


                />)

            })
          }
      </div>
    )
}

export default MealsContainer