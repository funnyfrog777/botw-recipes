export default function MealItem({img, name, desc, resale, ingredients, cart, setCart}) {
    const handleClick = () => {
        var temp = cart;
        if (name in cart) {
            temp[name] += 1;
            setCart(temp);
        } else {
            temp[name] = 1;
            setCart(temp);
        }
        console.log(cart);
    }

    return (
        <div>
            <div className="Meal-item">
                <p className="center">{name}</p>
                <img src={img} alt="meal" height="150"/>
                <span>♦{resale}</span>
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
            <div className="add-items">
                <button className="button" onClick={handleClick}>Add Recipe</button>
            </div>
        </div>
    )
}