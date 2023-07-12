function Category({imgSrc, categoryName, handleClick}){

    return(
        <div className="category" onClick={() => handleClick(categoryName)}>
            <div className="meal-categories">
                <img src={imgSrc}/>
                <h1>{categoryName}</h1>
            </div>
        </div>
    )
}

export default Category