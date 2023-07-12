function Ingredients({ingredients}){ // this is array
    let ings = ingredients.map(ingr => <li>{ingr}</li>)

    return (
        <div className="ingredients">
            <h2>Ingredients:</h2>
            <ol>
                {ings}
            </ol>
        </div>
    )
}

export default Ingredients