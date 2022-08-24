import { Fragment } from 'react';

import MealsSumary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
    return (
        <Fragment>
            <MealsSumary/>
            <AvailableMeals/>
        </Fragment>
    )
}

export default Meals;