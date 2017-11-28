import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import './summary.css';

class SummaryModule extends React.Component {
  render() {
    const { selectedDate } = this.props;
    const dateInText = moment(selectedDate, 'YYYYMMDD').format('MMMM Do, YYYY');
    
    return (
      <div className="module summary-module">
        <h3>SUMMARY</h3>
        <h4>{dateInText}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedDate: state.calendar.selectedDate,
});

const mapDispatchToProps = (dispatch) => ({
});

SummaryModule.propTypes = {
  selectedDate: PropTypes.string.isRequired,
};

const Summary = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SummaryModule);

export default Summary;
