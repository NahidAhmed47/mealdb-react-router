import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayFood from '../DisplayFood/DisplayFood';

const Foods = () => {
    const foods = useLoaderData();
    return (
        <div>
            <h1>Total foods: ({foods.meals.length})</h1>
            <div className="grid md:grid-cols-4 gap-5">
                {
                    foods.meals.map(food => <DisplayFood key={food.idMeal} food={food}></DisplayFood>)
                }
            </div>
        </div>
    );
};

export default Foods;