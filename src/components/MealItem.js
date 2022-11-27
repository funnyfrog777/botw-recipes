export default function MealItem({img, name, desc, resale, ingredients, cart, setCart, total, setTotal}) {
    const handleAddClick = () => {
        setCart([...cart, name]);
        setTotal(Number(total) + Number(resale));
    };

    const handleSubtractClick = () => {
        var temp = [...cart];
        var index = temp.indexOf(name);
        if (index !== -1) {
            temp.splice(index, 1);
            setCart(temp);
            setTotal(Number(total) - Number(resale));
        }
    };

    const numOccurrences = () => {
        var counter = 0;
        cart.forEach(element => {
            if (element === name) {
                counter += 1;
            }
        });
        return counter;
    };

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
            <div className="add-items">
                <span>
                    <button className="button" onClick={handleSubtractClick}>-</button>
                    {numOccurrences()}
                    <button className="button" onClick={handleAddClick}>+</button>
                </span>
            </div>
        </div>
    )
}