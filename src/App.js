import {useState, useEffect} from "react"

import Logo from "./images/logo.png"

// Import the needed components
import SearchBar from "./SearchBar"
import Header from "./Header"
import MealsContainer from "./MealsContainer"
import CategContainer from "./CategContainer"

function App() {

  const [error, setError] = useState(false)

  const [currMeals, setCurrMeals] = useState([])

  const [currMealsDesc, setCurrMealsDesc] = useState([])

  const [mealCategories, setMealCategories] = useState([])

  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError(false);
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [error]);


  useEffect(() => {
    const fetchMealsDesc = async () => {
      if (currMeals.length !== 0) {
        let data = [];
        for (let i = 0; i < currMeals.length; i++) {
          const response = await fetch(
            `https://themealdb.com/api/json/v1/1/lookup.php?i=${currMeals[i].idMeal}&fbclid=IwAR1qFKnhPeovQ4C5cN6grP46w9ieSwfQbdD9039rbCgCGtX0lOLNJ4CIN9A`
          );
          const desc = await response.json();
          data.push(desc);
        }
        setCurrMealsDesc(data);
      } else {
        setCurrMealsDesc([]);
      }
    };

    fetchMealsDesc();
}, [currMeals]);

  useEffect(() => {
        const fetchMealCategories = async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            const data = await response.json()
            setMealCategories(data.categories)
        }
        fetchMealCategories()
  },[])

  function Reset(){
      setCurrMeals([])
      setCurrMealsDesc([])
  }

  function GetMealsByCategory(catName){
      if(catName == ""){
          return
      }

      let catNameLower = catName.toLowerCase()

      let noMatch = 0

      for(let i = 0; i < mealCategories.length; i++){
        let convertToLower = mealCategories[i].strCategory.toLowerCase()
        if(convertToLower.startsWith(catNameLower)){
            catName = mealCategories[i].strCategory
            break
        }
        else{
            noMatch += 1
            if(noMatch == mealCategories.length){
                setError(true)
                return
            }
        }
      }
      const fetchMealsByCategory = async () =>{
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`)
          const data = await response.json()
          setCurrMeals(data.meals)
      }
      fetchMealsByCategory()
  }

  function GetMealsByName(mealName){
      if(mealName == ""){
          setCurrMeals([])
          setCurrMealsDesc([])
          return
      }

      const fetchMealsByName = async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=&fbclid=IwAR3ApSLgNoN964AkYAfNrFCSzDqu14a40eI3vP4US_OlIg1Ew_9ZrTdLqKY');
        const data = await response.json()
        let newData = []

        let noMatch = 0

        for(let i = 0; i < data.meals.length; i++){
            if(data.meals[i].strMeal.toLowerCase().includes(mealName.toLowerCase())){
                newData.push(data.meals[i])
            }
            else{
                noMatch += 1
                if(noMatch == data.meals.length){
                    setError(true)
                    setCurrMeals([])
                    setCurrMealsDesc([])
                    return
                }
            }

        }
        setCurrMeals(newData)
      }
      fetchMealsByName()
  }

  return (
    <div className="container">
        <Header 
          logo={Logo} 
          title="Quality Meals" 
          getMeals = {GetMealsByCategory}
          categories = {mealCategories}
          reset={Reset}
        />

      <SearchBar handleSubmit={GetMealsByName}/>

      {error && <h1 className="errorMessage">Not Found! Try again.</h1>}
      
      <MealsContainer Meals={currMealsDesc} />

      <CategContainer categories={mealCategories} onClickHandle={GetMealsByCategory} />
    </div>
  );
}
  
export default App;
