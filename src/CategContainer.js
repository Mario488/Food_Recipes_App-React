import Category from "./Category";

function CategContainer({categories, onClickHandle}){
    return (
    <div className="categories-container">
        <h1 className="section">Categories <span style={{fontSize: "5rem"}}>→</span></h1>
        {
            categories.map((item, index) => 
            <Category 
                key={`${index}`}
                imgSrc={item.strCategoryThumb} 
                categoryName={item.strCategory}
                handleClick={onClickHandle}
            />)
        }
      </div>

    )
}

export default CategContainer