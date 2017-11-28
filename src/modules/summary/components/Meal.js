import React from 'react';
import PropTypes from 'prop-types';
import { Well, Table } from 'react-bootstrap';
import MealEntry from './MealEntry';

const Meal = ({ title, mealEntries }) => {
  const entries = mealEntries.map((meal, i) => (
    <MealEntry key={i} data={meal} />
  ));

  console.log('this is', entries.length)
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
                <th style={{ width: '20%'}}>
                  cal
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
};

export default Meal;
