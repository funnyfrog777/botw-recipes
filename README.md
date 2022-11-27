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
TODO

### How Data is Passed Down Through Components
TODO

### How the User Triggers State Changes
TODO

### Data/Resources Acknowledgements
- Website Icon: [Game Rant](https://www.google.com/url?sa=i&url=https%3A%2F%2Fgamerant.com%2Fzelda-breath-wild-best-cooking-recipes%2F&psig=AOvVaw3y1xRmLmP53M4-hGUhgzC_&ust=1669222260066000&source=images&cd=vfe&ved=0CBAQjhxqFwoTCNiJg9SfwvsCFQAAAAAdAAAAABAN)
- Header background: [Stuff](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stuff.tv%2Freview%2Fthe-legend-of-zelda-breath-of-the-wild-review%2F&psig=AOvVaw2ktvIsNP_8Pk-D-5N2Z9q3&ust=1669239803308000&source=images&cd=vfe&ved=0CBAQjhxqFwoTCIiH2InhwvsCFQAAAAAdAAAAABAD)
- Scraped Meal Data from: [zeldadungeon.net](https://www.zeldadungeon.net/wiki/Breath_of_the_Wild_Meals#Salmon_Meuni.C3.A8re)
- Sourced Ingredients Data from: [zelda-cookbook-backend](https://github.com/lexbonder/zelda-cookbook-backend/tree/master/data)
- Font [Hylia Serif](https://artsyomni.com/hyliaserif/download)