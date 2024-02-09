import { useContext } from "react";
import { MealsContext } from "./MealsProvider";
const MealsList = () => {

  const {meals,tickMeal} = useContext(MealsContext);

  return (
    <div>
      <h2>Meals:</h2>
      <ul>
        {meals.map((obj)=>{
            return (  <li key={obj.id}>
              <input type="checkbox" 
              checked={obj.ticked || false}
              onChange={()=>tickMeal(obj.id)}
              />
               {obj.name}
            </li>)
        })}
      
      </ul>
    </div>
  );
};

export default MealsList;
