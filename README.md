# Development
<!-- - 2 Filtering categories
    - [X] Filter by ingredients (list of ingredient checkboxes)
    - [X] Filter by selling price (min and max specifier)
- 1 Sorting feature
    - [X] Sort by cheapest/expensive for selling price filter
- Aggregator section
    - [X] "Cart" that the user can add recipes to
    - [X] Total selling price of the items
- [ ] At least 12 item cards displaying
    - [X] Item image
    - [X] Categories that your filter uses (ingredients required and selling price)
    - [X] Field(s) that your sort uses (selling prices)
    - [X] Property you are aggregating (the item itself)
    - [X] Button that adds or removes from aggregator (number that display how many are added to cart, with a minus and plus button on either side to add to cart) -->

### Link to Deployed Website
[https://funnyfrog777.github.io/botw-recipes](https://funnyfrog777.github.io/botw-recipes)

### Goal and Value of the Application
Cooking is a large part of the video game, *Breath of the Wild*. Cooked meals can be used to restore hearts or to sell for rupees (the in-game currency). However, there is no in-game recipe book, which forces the user to either remember the recipes they discover or Google them. 

This application provides a way for users to quickly look through all the recipes they can make given the ingredients they own. Each recipe card displays the required ingredients as well as the resale price. Users can also add recipes to their "Recipes to Make" cart that allows users to quickly see the total amount of rupees they can make if they made all the recipes they added. Users can also sort and filter by resale price if the user only want to sell cheap or expensive items.

### Usability Principles Considered
#### Usability
1. I added all filters and recipe cart at the top of the website which makes it easier to see which filters have been applied and what recipes have been added.
2. Each recipe is a card-view in a grid format which makes it easy to quickly scroll through all the recipes.
3. You can add or remove items on each recipe's card. You can also remove items from the "Recipes to Make" cart as well. That way if you want to remove an item from the cart, you don't have to scroll all the way to the corresponding card.
4. I added functionality to either select or deselect all ingredients. This can be useful if you have a lot of ingredients and just want to deselect some, or if you have very few ingredients and just want to select some.
#### Learnability
1. The checkboxes imply an "and" operation, which is correct for filtering the recipe cards. If you are missing one ingredient, you can't make the recipe at all even if you have all the other ingredients.
2. The sliders imply a "range", which is correct for filtering by price because the minimum and maximum resale prices operate on a sliding scale.
3. The radio button imply a "select one" operation, which is correct for the "Sort By" filter because you can either sort by low-to-high or high-to-low.
4. All the buttons and card views follow the same format which makes it easy to learn/digest.
#### Memorability
1. Easy to remember that all the filtering and aggregation is at the top of the webpage, while all the available recipes are are below that.

### Organization of Components
I decided to make components for elements that needed to be modular. The following are the components that I made:
1. `CheckBox` component: Used to generate all the checkboxes for the "Ingredients" filter.
3. `Slider` component: Used to generate the sliders for the "Resale" filter.
4. `Rupee` component: Used in every place that used the rupee icon.
2. `MealItem` component: Used to generate all the card views for every recipe.

I decided not to make components anything else (like the "Recipes to Make" section) because they were either very simple JS tags, or there only existed one of them and thus didn't need to be reused.

### How Data is Passed Down Through Components
#### `CheckBox`
- **State**: `ingredients`: Each checkbox takes in an `ingredients` state, which is a list of ingredients that the user has selected. This state is used to filter the recipe cards to only display recipes that contain all the ingredients selected.
- **Prop**: `id`: The `id` prop is the name of each ingredient. It is used by the `Reset Filters`, `Select All`, and `Deselect All` buttons to either uncheck or check the checkbox.
- **Prop**: `name`: The `name` prop is used to give each checkbox its label, which is the name of the ingredient.
#### `Slider`
- **State**: `val`: Each slider takes in a `val` state, which tracks either the minimum or maximum resale state. This state is used to filter the recipe cards to only display recipes whose resale price falls within the minimum and maximum range (included).
- **State**: `lowerBound` and `upperBound`: These specify the minimum and maximum range of each slider. When one of the sliders change value, it update the min/max range of the other slider. This ensures that the minimum slider can never go above the value of the maximum slider and the maximum slider can never go below the value of the minimum slider.
- **Prop**: `id`: The `id` is used by the `Reset Filters` button that resets the filters to their default state (0 for minimum and 158 for maximum).
#### `Rupee`
- N/A
#### `MealItem`
- **State** `cart`: The `cart` is the "Recipes to Make" section. I named it `cart` because it functions like a cart and it's a short variable name. When you click the `+` or `-` button on a recipe card/`MealItem`, it either adds or removes itself to the `cart` state, which is then used to display all the recipes added to the "Recipes to Make" section.
- **State** `total`: The `total` is the total resale price of all the recipes in the cart. It is displayed in the "Recipes to Make" section when there is at least one recipe added.
- **Props** `img`, `name`, `desc`, `resale`, `ingredients`: These are the image file path, recipe name, recipe description, resale value, and required ingredients to make the recipe accordingly. These are all the information that is also used by the filters and sorts.

### How the User Triggers State Changes
#### `CheckBox`
- When the checkbox is checked, the `ingredients` state is updated to contain the corresponding ingredient. When it is unchecked, the corresponding ingredient is removed from the `ingredients` state.
#### `Slider`
- When the slider is moved, corresponding `val` states (`min` and `max`) are updated. 
#### `Rupee`
- N/A
#### `MealItem`
- When the `+` button is clicked, the recipe is added to the `cart` state. When the `-` button is clicked, the recipe is removed from the `cart` state (if it exists in the `cart`). This in turn also updated the `total` state at the same time.


### Data/Resources Acknowledgements
- Website Icon: [Game Rant](https://www.google.com/url?sa=i&url=https%3A%2F%2Fgamerant.com%2Fzelda-breath-wild-best-cooking-recipes%2F&psig=AOvVaw3y1xRmLmP53M4-hGUhgzC_&ust=1669222260066000&source=images&cd=vfe&ved=0CBAQjhxqFwoTCNiJg9SfwvsCFQAAAAAdAAAAABAN)
- Header background: [Stuff](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stuff.tv%2Freview%2Fthe-legend-of-zelda-breath-of-the-wild-review%2F&psig=AOvVaw2ktvIsNP_8Pk-D-5N2Z9q3&ust=1669239803308000&source=images&cd=vfe&ved=0CBAQjhxqFwoTCIiH2InhwvsCFQAAAAAdAAAAABAD)
- Scraped Meal Data from: [zeldadungeon.net](https://www.zeldadungeon.net/wiki/Breath_of_the_Wild_Meals#Salmon_Meuni.C3.A8re)
- Sourced Ingredients Data from: [zelda-cookbook-backend](https://github.com/lexbonder/zelda-cookbook-backend/tree/master/data)
- Font [Hylia Serif](https://artsyomni.com/hyliaserif/download)