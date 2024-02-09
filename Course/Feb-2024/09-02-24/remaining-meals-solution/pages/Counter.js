import { useContext } from "react";
import { MealsContext } from "./MealsProvider";

const Counter = () => {
  const {meals} = useContext(MealsContext);
  const result = meals.filter((obj)=>{
     return !obj.ticked;
  });

  return (
    <div>
      <h3>Meals Remaining: remainingMeals:{result.length}</h3>
    </div>
  );
};

export default Counter;
