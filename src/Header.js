import {useState} from "react"

function Header({logo, title, getMeals, categories, reset}){
  
    const [navVisibility, setNavVisibility] = useState("none")

    const [styles, setStyles] = useState({transform: "rotate(0deg)"})

    
    function OpenNav(){
        setNavVisibility("block")
        setStyles({transform: "rotate(180deg)"})
    }
    function CloseNav(){
        setNavVisibility("none")
        setStyles({transform: "rotate(0deg)"})
    }

    return (
        <>
            <header>
                <img src={logo}/>
                <span onClick={reset}>{title}</span>
                <button 
                onClick={navVisibility === 'block' ? CloseNav : OpenNav}
                style={styles}
                >☰</button>
            </header>
            <div className="categories-navbar" style={{display: navVisibility}}>
                {categories.map(item => {
                return <>
                <button 
                onClick={() => getMeals(item.strCategory)}
                >{item.strCategory}</button><hr/></>
                })}
            </div>
        </>
    )
}

export default Header