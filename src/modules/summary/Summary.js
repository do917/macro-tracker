import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';
import './summary.css';
import actions from './actions';
import components from './components';

const { Meal } = components;

class SummaryModule extends React.Component {
  render() {
    const {
      summary,
      deleteEntry,
      selectedDate,
    } = this.props;
    const dateInText = moment(selectedDate, 'YYYYMMDD').format('MMMM Do, YYYY');
    const summaries = summary.data[selectedDate] || {};
    const meals = ['breakfast', 'lunch', 'dinner', 'snacks'];
    const foods = _.flatten(meals.map((m) => summaries[m] || []));
    const calories = foods.reduce((t, f) => t + f.calories, 0);

    return (
      <div className="module">
        <h3>REVIEW SUMMARY</h3>
        <div className="summary-overview">
          <h4>{dateInText}</h4>
          Total Calories: {calories}
        </div>
        {meals.map((meal, i) => (
          <Meal
            key={i}
            title={_.capitalize(meal)}
            mealEntries={summaries[meal] || [] }
            onDelete={(i) => deleteEntry(selectedDate, meal, i, summary.data)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  summary: state.summary,
  selectedDate: state.calendar.selectedDate,
});

const mapDispatchToProps = (dispatch) => ({
  deleteEntry: (selectedDate, meal, i, summaries) => dispatch(actions.deleteEntry(selectedDate, meal, i, summaries)),
});

SummaryModule.propTypes = {
  summary: PropTypes.object.isRequired,
  deleteEntry: PropTypes.func.isRequired,
  selectedDate: PropTypes.string.isRequired,
};

const Summary = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SummaryModule);

export default Summary;
