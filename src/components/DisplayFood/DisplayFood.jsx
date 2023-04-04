import React from 'react';

const DisplayFood = ({food}) => {
    const {strMeal, strCategory, strArea, strMealThumb, strYoutube} = food;
    return (
        <div className="border-2 p-1 rounded-md">
            <img className="w-full h-[200px]" src={strMealThumb} alt="" />
            <div className="sm:pt-2 pl-1">
                <h1 className="text-lg md:text-xl font-semibold font-serif">{strMeal}</h1>
                <p className="text-sm md:text-base font-medium ">Category: {strCategory}</p>
                <p className="text-sm md:text-base font-medium ">Origin: {strArea}</p>

            </div>
        </div>
    );
};

export default DisplayFood;