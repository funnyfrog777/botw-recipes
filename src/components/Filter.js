export default function Filter({name}) {
    return (
        <div className="inline">
            <input type="checkbox" id={name} name={name}/>
            <label for={name} className="small-font"> {name} </label>
        </div>
    )
}

/**
 * All Ingredients (38): 
 * {'Fortified Pumpkin', 'Courser Bee Honey', 'Rock Salt', 'Hyrule Bass', 'Hyrule Herbs', 'Monster Extract', 
 * 'Spicy Pepper', 'Hyrule Herb', 'Mighty Porgy', 'Endura Shroom', 'Apple', 'Hearty Radish', 'Mighty Thistle', 'Tabantha Wheat', 
 * 'Raw Prime Meat', 'Swift Carrot', 'Razorclaw Crab', 'Hydromelon', 'Bird Egg', 'Hylian Shroom', 'Armored Porgy', 'Acorn', 
 * 'Goron Spice', 'Raw Gourmet Meat', 'Endura Carrot', 'Raw Bird Drumstick', 'Mighty Bananas', 'Hylian Rice', 'Cool Safflina', 
 * 'Fresh Milk', 'Wildberry', 'Goat Butter', 'Hearty Blueshell Snail', 'Voltfruit', 'Cane Sugar', 'Raw Meat', 'Raw Whole Bird', 
 * 'Goat Butter.'}
 */