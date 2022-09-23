import classes from "./MealsAvailable.module.css"
import Card from "../UI/Card";
import MealItem from "./MealItems/MealItem";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Malai kofta',
      description: 'An Indian specialty!',
      price: 7.5,
    },
    {
      id: 'm3',
      name: 'Chicken butter masala',
      description: 'North indian Dish',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const MealsAvailable = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem 
      key = {meal.id}
      id = {meal.id}
      name={meal.name} 
      description = {meal.description} 
      price = {meal.price}
      />);
    return (
        <section className= {classes.meals}>
          <Card>
            <ul>
              {mealsList}
            </ul>
          </Card>
        </section>
    )
}

export default MealsAvailable