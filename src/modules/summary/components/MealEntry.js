import React from 'react';
import PropTypes from 'prop-types';

const MealEntry = ({ data }) => {
  return (
    <tr>
      <td>
        {data.name}
      </td>
      <td>
        {data.calories}
      </td>
      <td>
        {data.fat}
      </td>
      <td>
        {data.carbs}
      </td>
      <td>
        {data.protein}
      </td>
    </tr>
  );
};


MealEntry.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MealEntry;
