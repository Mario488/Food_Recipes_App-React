function MealTags({tags}){
    let tagsArr = []
    if(tags){
        tagsArr = tags.split(',')
        if(tagsArr.length > 3){
            tagsArr = tagsArr.slice(0, 3)
        }
    }
    return (
        <h3>Tags: 
            <div className="tags">
                {tagsArr.map(tag => {
                    return <span className="tag">{tag}</span>
                })}
            </div>
        </h3>
    )
}

export default MealTags