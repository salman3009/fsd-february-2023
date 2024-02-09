import { useState,createContext } from "react";

export const MealsContext = createContext();

const todaysMeals = [
  { id: 1, name: "Baked Beans" },
  { id: 2, name: "Baked Sweet Potatoes" },
  { id: 3, name: "Baked Potatoes" },
];

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todaysMeals);

  const tickMeal = (id) => {
      let result = meals.map((obj)=>{
         return obj.id == id ?{...obj,ticked:!obj.ticked}:obj;
      })
      console.log(result);
      setMeals(result);
  };

  return <div>
    <MealsContext.Provider value={{meals,tickMeal}}>
          {children}
    </MealsContext.Provider>
  </div>;
};

export default MealsProvider;
