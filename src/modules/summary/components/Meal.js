import React from 'react';
import PropTypes from 'prop-types';
import { Well, Table } from 'react-bootstrap';
import MealEntry from './MealEntry';

const Meal = ({ title, mealEntries, onDelete }) => {
  const entries = mealEntries.map((meal, i) => (
    <MealEntry key={i} data={meal} onDelete={() => onDelete(i)}/>
  ));

  return (
    <div>
      <h5>{title}</h5>
      <Well>
        {!entries.length > 0 ?
          <div/> :
          <Table condensed hover>
            <thead>
              <tr>
                <th style={{ width: '35%'}}>
                  food
                </th>
                <th style={{ width: '15%'}}>
                  kcal
                </th>
                <th style={{ width: '15%'}}>
                  fat
                </th>
                <th style={{ width: '15%'}}>
                  carbs
                </th>
                <th style={{ width: '15%'}}>
                  protein
                </th>
                <th style={{ width: '5%'}}>
                </th>
              </tr>
            </thead>
            <tbody>
              {entries}
            </tbody>
          </Table>
        }
      </Well>
    </div>
  );
};


Meal.propTypes = {
  mealEntries: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Meal;
