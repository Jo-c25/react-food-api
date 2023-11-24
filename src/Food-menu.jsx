import { useEffect, useState } from "react"

function FoodApi () {

    const [items, setItems] = useState([])
    
useEffect(() => { 
        const fetchData = async () => {
          const data = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood');
          const json = await data.json();
    setItems(json.meals);
        }
        fetchData() 
      }, [])
      
return (
    <div className="container">
    {items.map((app) => (
        <div key={app.idMeal} id={app.idMeal} className="card">
            <img src={app.strMealThumb} className="thumb"/>
            <div className="content">
            <p>#{app.idMeal}</p>
        <p>{app.strMeal}</p>
        </div>
        </div>
    )

    )}
    </div>
)
    
}


export default FoodApi