import {useState} from "react"

function SearchBar({handleSubmit}){
    const [formData, setFormData] = useState("")

    function SearchMeal(event){
        setFormData(event.target.value)
    }
    
    return (
        <div className="Search">
            <form onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  className="search-bar" 
                  onChange={SearchMeal} 
                  value={formData}
                  placeholder="Search for recipes ..."
                  />
                <button onClick={() => handleSubmit(formData)}>🔍</button>
            </form>
        </div>
    )
}

export default SearchBar