import React from "react";
import dishesData from "../../Data/DataDishes";
import Dish from "./Dish";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/DishesSlice";

const Dishes = () => {

    const selectedCategory = useSelector(getSelectedCategory);
    return(
<div>
    {dishesData
    .filter(dish => {
        if (selectedCategory === "ALL") return true;
        return selectedCategory === dish.category;
    })
    .map(dish => <Dish dish={dish} />)}
</div>
    )
}

export default Dishes;