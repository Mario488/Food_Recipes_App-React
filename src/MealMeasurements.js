function MealMeasurements({measure}){ // this is array
    let measurements = measure.map((item,index) => {
            if(item.length > 1){
                return <li>🥄 {`${index + 1})`} {item}</li>
            }
    })

    return (
        <div className="meal-measurements">
            <h1>Measure</h1>
            <ul>
                {measurements}
            </ul>
        </div>
    )
}

export default MealMeasurements