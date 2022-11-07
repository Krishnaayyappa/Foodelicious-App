import classes from "./MealsAvailable.module.css"
import { useEffect, useState} from "react";
import Card from "../UI/Card";
import MealItem from "./MealItems/MealItem";

// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'Mutton Biryani',
//       description: 'Hyderbadi special',
//       price: 22.99,
//     },
//     {
//       id: 'm2',
//       name: 'Malai kofta',
//       description: 'An Indian specialty!',
//       price: 7.5,
//     },
//     {
//       id: 'm3',
//       name: 'Chicken butter masala',
//       description: 'North indian Dish',
//       price: 12.99,
//     },
//     {
//       id: 'm4',
//       name: 'Gulab Jamun',
//       description: 'A delicious sweet',
//       price: 8.99,
//     },
//   ];






const MealsAvailable = () => {

  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] =  useState(true);

  useEffect(()=>{
    const fetchMeals = async () => {
      const response = await fetch("https://food-data-aff7b-default-rtdb.firebaseio.com/meals.json");
      if (!response.ok){
        throw new Error("something went wrong");
      }
      const data = await response.json();
      const loadedMeals = []
      for (const key in data){
        loadedMeals.push({id:key, name:data[key].name, description:data[key].description, price:data[key].price});
      }
      setMeals(loadedMeals);
      setLoading(false);
    }

    fetchMeals().catch(error => {
      setLoading(false);
      setError(error.message);
      
    })
  },[])

  if (isLoading){
    return(
      <section className={classes.loading}>
        <p>loading...</p>
      </section>
    )
  }

  if (error){
    return(
      <section className={classes.err}>
        <p>{error}</p>
      </section>
    )
  }

  

  const mealsList = meals.map(meal => <MealItem 
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