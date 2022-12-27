export default function MealItem({img, name, desc, resale, ingredients}) {
    return (
        <div>
            <div className="Meal-item">
                <p className="center">{name}</p>
                <img className="image" src={img} alt={name}/>
                <span><img className="icon-2" src="images/Rupee.png" alt={"Rupee"}/> {resale}</span>
                <span className="description center"><i>{desc}</i></span>
            </div>
            <div className="Meal-item-ingredients">
                <span className="label">Ingredients: </span>
                <div className="description small-font">
                    {ingredients.map((item, index) => (
                        <p className="small-margin">- {item}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}