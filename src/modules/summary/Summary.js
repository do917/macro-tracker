import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';
import './summary.css';
import components from './components';

const { Meal } = components;

class SummaryModule extends React.Component {
  render() {
    const {
      selectedDate,
      summary,
    } = this.props;
    const dateInText = moment(selectedDate, 'YYYYMMDD').format('MMMM Do, YYYY');
    const summaries = summary.data[selectedDate] || {};
    const meals = ['breakfast', 'lunch', 'dinner', 'snacks'];
    
    return (
      <div className="module summary-module">
        <h3>REVIEW SUMMARY</h3>
        <div className="summary-overview">
          <h4>{dateInText}</h4>
          Total:
        </div>
        {meals.map((meal, i) => (
          <Meal
            key={i}
            title={_.capitalize(meal)}
            mealEntries={summaries[meal] || [] }
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedDate: state.calendar.selectedDate,
  summary: state.summary,
});

const mapDispatchToProps = (dispatch) => ({
});

SummaryModule.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  summary: PropTypes.object.isRequired,
};

const Summary = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SummaryModule);

export default Summary;
