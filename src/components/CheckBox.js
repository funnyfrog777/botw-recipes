export default function CheckBox({name, ingredients, setIngredients}) {

    const handleClick = () => {
        var array = [...ingredients];
        var index = array.indexOf(name);
        var el = document.querySelector('#dateCheckbox');
        if (index !== -1) {
            array.splice(index, 1);
            setIngredients(array);
            el.removeAttribute('')
        } else {
            setIngredients([...array, name]);
        }
    }

    return (
        <div className="inline">
            <input type="checkbox" id={name} name={name} onClick={handleClick} defaultChecked={true}/>
            <label for={name} className="small-font"> {name} </label>
        </div>
    )
}