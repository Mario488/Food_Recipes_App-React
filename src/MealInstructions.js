function MealInstructions({instructions}){
    let inst = instructions.split("\r\n\r\n")
    let instArr = inst.map(item => (<li>🟠 {item}</li>))

    return (
        <div className="meal-instructions">
            <h1>Instructions</h1>
            <ul>
                {instArr}
            </ul>
        </div>
    )
}

export default MealInstructions