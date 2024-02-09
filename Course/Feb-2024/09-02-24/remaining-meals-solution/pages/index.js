import MealsProvider from "./MealsProvider";
import MealsList from "./MealsList.js";
import Counter from "./Counter";

export default function Home() {
  return (
    <div id="main">
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  );
}
