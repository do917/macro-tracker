import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const MealEntry = ({ data, onDelete }) => {
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
      <td>
        <Button bsSize="xsmall" onClick={onDelete}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </Button>
      </td>
    </tr>
  );
};


MealEntry.propTypes = {
  data: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MealEntry;
