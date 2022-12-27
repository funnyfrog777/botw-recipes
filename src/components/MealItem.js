export default function MealItem({img, name, desc, resale, ingredients}) {
    return (
        <div>
            <div className="Meal-item">
                <p className="center">{name}</p>
                <img className="image" src={img} alt={name}/>
                <span><img className="icon-2" src="images/Rupee.png" alt={"Rupee"}/> {resale}</span>
                <span className="description"><i>{desc}</i></span>
            </div>
            <div className="dark-green">
                <span className="label">Ingredients: </span>
                <div className="description">
                    {ingredients.map((item, index) => (
                        <p>- {item}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}