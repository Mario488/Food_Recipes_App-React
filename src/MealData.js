function MealData({link, category, name}){
    
    let newName = ""
    if(name.length > 24){
        newName = name.slice(0,24) + "..."
    }
    
    return (
        <>
            <h1 className="meal-title">{newName == "" ? name : newName}</h1>
            <hr/>
            <h2 className="category">CATEGORY: <span className="category-name">{category}</span></h2>
            <h2>Source: <a href={link} target="_blank">About the Meal</a></h2>
        </>
    )
}

export default MealData